<!--#config timefmt="%m/%d/%Y %H:%M:%S %Z" -->
// 
var INTLHP = INTLHP || {};
	INTLHP.currentTimeDate = null;
	try {
		var timestamp = Date.parse('11/03/2016 05:51:28 GMT');
        if ( isNaN( timestamp ) === true ) {
               timestamp = Date.parse('<!--#echo var="DATE_LOCAL" -->');
			   if ( isNaN( timestamp ) === true ) {
					timestamp = new Date();
				}
        }
		
		INTLHP.currentTimeDate = new Date(timestamp);
	}
	catch (e) {
		INTLHP.currentTimeDate = new Date();
	}
