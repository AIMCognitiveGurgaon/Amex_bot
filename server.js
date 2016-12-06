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
server.post('/api/messages', connector.listen());
server.get(/.*/, restify.serveStatic({
 	'directory': '.',
 	'default': 'index.html'
 	}));
 
server.listen(config.port,function () {
	try{
		console.log('%s listening to %s', server.name, server.url);
	}
	catch(err){
		console.log("Server already in Use" + err);
	}
    
});
/*
bot.dialog('/userNeed', [
    function (session) {
        builder.Prompts.text(session, "Hello , How can I help you today? ")
    },
    function (session, results) {
        session.needs=results.response
        var substring="credit card"
		
	    	if ((session.needs.indexOf(substring) !== -1)){
        session.beginDialog('/creditCard');
    }
    }
]);
*/
bot.dialog('/creditCard', [
    function (session) {
        builder.Prompts.text(session, "Sure I can help you.  Are you looking for personal or small business cards? ")
    },
    function (session, results) {
        session.cardtype=results.response
        console.log(session.cardtype)
        var substring="personal"
		
	    	if ((session.cardtype.indexOf(substring) !== -1)){
        session.beginDialog('/personalCard');
    }
        
        
    }
]);

bot.dialog('/personalCard', [
    function (session) {
         builder.Prompts.choice(session, "Sure. May I know what benefits are you looking in your card ?  Could you indicate your choice amongst the following?", ['Cashbacks','Membership Rewards','No Annual Fees','Travel'],{ listStyle: builder.ListStyle.button });

    },
        function (session, results) {
        console.log(results.response.entity)
         //console.log(results.response.index)
        switch (results.response.index) {
           
            case 0:
                //builder.Prompts.text("We’ve the following cards for you with delighting cashback offers ! Please choose the card you’d like to have");
                session.beginDialog('/Cashbacks');
                break;
            case 1:
                session.beginDialog('/memReward');
                break;
            case 2:
                session.beginDialog('/NoAnnualFees');
                break;
            case 3:
                session.beginDialog('/Travel');
                break;
            default:
                session.endDialog();
                break;
        }
        }
]);
    function CreateHeroCard(session, builder, title, subtitle, text, url, buttons){
    var card = new builder.HeroCard(session)
        .title(title)
        .subtitle(subtitle)
        .text(text)     
        .images([builder.CardImage.create(session, url)])
        .buttons(buttons);      
    return card;
}

bot.dialog('/Cashbacks', [

    function (session) {
        session.send("We have the following cards for you with delighting cashback offers ! Please choose the card you will like to have");
        var buttons1 = [];   

    buttons1.push(builder.CardAction.openUrl(session, "https://qwww252.americanexpress.com/inga3/uk/pers/begin.do?perform=IntlEapp:UK:platinum_revolve_fb&journey=B&intlink=uk-amex-cardshop-PlatinumCashBackCreditCard-detail-applynow-main", "Click here to apply"));  

    var attachments1 = [];
    var card1 = CreateHeroCard(session, builder, "1) Credit card", "Platinum Card", 
                            " ",
                            "http://i.investopedia.com/dimages/graphics/platinum_amex.jpg",  
                            buttons1);

    attachments1.push(card1);

    var msg1 = new builder.Message(session)
    .attachments(attachments1);
    session.send(msg1);
    
    var buttons2 = [];
        buttons2.push(builder.CardAction.openUrl(session, "https://qwww252.americanexpress.com/inga3/uk/pers/begin.do?perform=IntlEapp:UK:platinum_revolve_fb&journey=B&intlink=uk-amex-cardshop-PlatinumCashBackCreditCard-detail-applynow-main", "Click here to apply"));  

    var attachments2 = [];
    var card2 = CreateHeroCard(session, builder, "2) Credit card", "Preferred Rewards Gold Card", 
                            " ",
                            "http://2.bp.blogspot.com/-wWAXeBSV6dE/UTe6X1ftGTI/AAAAAAAAJ2I/00_bLeqThQA/s320/amex-premier-rewards-gold.gif",  
                            buttons2);

    attachments2.push(card2);

    var msg2 = new builder.Message(session)
    .attachments(attachments2);
    session.send(msg2);
    
    var buttons3 = []
    
        buttons3.push(builder.CardAction.openUrl(session, "https://qwww252.americanexpress.com/inga3/uk/pers/begin.do?perform=IntlEapp:UK:platinum_revolve_fb&journey=B&intlink=uk-amex-cardshop-PlatinumCashBackCreditCard-detail-applynow-main ", "Click here to apply"));  

    var attachments3 = [];
    var card3 = CreateHeroCard(session, builder, "3) Credit card", "British Airways American Express Premium Plus Card", 
                            " ",
                            "http://www.headforpoints.com/wp-content/uploads/2014/06/BA-Premium-Plus-NEW.jpg",  
                            buttons3);

    attachments3.push(card3);

    var msg3 = new builder.Message(session)
    .attachments(attachments3);
    session.send(msg3);
    session.beginDialog('/thankApply');
    }
]);
bot.dialog('/thankApply',[
    function (session) {
	  builder.Prompts.text(session, 'Thank you!!! You can now apply instantly for this card by filling the application. It takes just a few minutes.  Is there anything else I can help you with.');
	  
    },
    function (session, results) {
    console.log(results.response)
    session.beginDialog('/thankYou');
    }

])
bot.dialog('/thankYou',[
    function (session) {
	  session.endConversation("Thank you for choosing us and have a wonderful time ahead !") 
	
    }

])


bot.dialog('/', [
   function (session) {
   console.log("Bot start!!!!")
   builder.Prompts.text(session, "Hello , How can I help you today? ")
    },
    function (session, results) {
        session.needs=results.response
        var substring="credit card"
		
	    	if ((session.needs.indexOf(substring) !== -1)){
        session.beginDialog('/creditCard');
        }
        }
        
]);

