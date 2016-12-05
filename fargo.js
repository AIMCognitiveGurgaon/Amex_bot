var restify = require('restify');
var builder = require('botbuilder');
var config = require('./configuration');
var prompts = require('./prompts');


//var luisDialog = new builder.LuisDialog(config.model);


//BOT REST end point
var server = restify.createServer();
var connector = new builder.ChatConnector({
    appId: '61193e6a-ee44-4286-9003-df1ced57539d',
    appPassword: 'LaqMZACQziNRKyuQXVudGeS'
});

var bot = new builder.UniversalBot(connector);
server.post('bankerbot/v1/messages', connector.listen());

server.listen(config.port,config.ip,function () {
	try{
		console.log('%s listening to %s', server.name, server.url);
	}
	catch(err){
		console.log("Server already in Use" + err);
	}
    
});

bot.dialog('/debitCard', [
    function (session) {
  
        
        builder.Prompts.choice(session,"Sure I can help you.  We have the following types of debit cards. These are the three types of debit card. Please click on the one which you want to apply ", ['Platinum Debit Card', 'Instant Issue Debit Card', 'Campus Card'],{ listStyle: builder.ListStyle.button });
    },
    function (session, results) {
        console.log(results.response.entity)
         //console.log(results.response.index)
        switch (results.response.index) {
           
            case 0:
                session.beginDialog('/PlatinumDebitCard');
                break;
            case 1:
                session.beginDialog('/InstantIssueDebitCard');
                break;
            case 2:
                session.beginDialog('/CampusCard');
                break;
                
            default:
                session.endDialog();
                break;
    }
        
        
    }
]);

bot.dialog('/PlatinumDebitCard', [
    function (session) {
         builder.Prompts.text(session,"Thank you ! You could now apply instantly for this card by filling the application. It takes just a few minutes. Is there anything else I can help you with?")
          },
        function (session, results) {
        console.log(results.response)
         //console.log(results.response.index)
       builder.Prompts.text(session,": Thank you for choosing us and have a wonderful time ahead !")
        }
]);
  

bot.dialog('/', [
   function (session) {
   console.log("Bot start!!!!")
        builder.Prompts.text(session, "Hello , How can I help you today? ")
    },
    function (session, results) {
        session.needs=results.response
        var substring="debit"
		
	    	if ((session.needs.indexOf(substring) !== -1)){
        session.beginDialog('/debitCard');
        }
        }
        
]);

