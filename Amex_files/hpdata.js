












	
	
	
	
	





























 









'use strict';
 
var AMEXUKHP = AMEXUKHP || {};
AMEXUKHP.data = AMEXUKHP.data || {};
/* Once ESI Timestamp Enabled need to be uncomment below line*/
AMEXUKHP.currentTimeDate = INTLHP.currentTimeDate || new Date();
//AMEXUKHP.currentTimeDate = new Date();

/*If market have EU cookie policy,set this flag true .updated*/
AMEXUKHP.euCookie_enabled = true;

/*Flag to enable/disable PZN. Edited*/
AMEXUKHP.oyster_pznEnabled = true;

/*Flag to enable/disable PZN*/
AMEXUKHP.pznEnabled = true;
AMEXUKHP.pznURL = 'https://www251.americanexpress.com/offerservice/offerservice.do?pageId=HP-INTL&mktCode=UK&langCode=EN&channel=WEB&queryString=RequestType=NONXML&publicGuid=';
AMEXUKHP.pznLoaded = false;
	
try {
	AMEXUKHP.data.heroDefault = 40006;AMEXUKHP.data.heroes = { list: [{"id":"40006","filter":"pr","dts":"//forever ::00 MST","dte":"//forever ::00 MST","segmentid":"9999,1010,1011,1020,1021,1030,1031,1049,1050,1051"}, {"id":"40026","filter":"cm","dts":"07/13/2015 23:00:00 MST","dte":"12/31/2016 23:59:00 MST","segmentid":""}, {"id":"40030","filter":"pr","dts":"//forever ::00 MST","dte":"//forever ::00 MST","segmentid":"9949,1149"}, {"id":"40032","filter":"pr","dts":"//forever ::00 MST","dte":"//forever ::00 MST","segmentid":"9920,1120"}, {"id":"40033","filter":"pr","dts":"//forever ::00 MST","dte":"//forever ::00 MST","segmentid":"9921,1121"}, {"id":"40039","filter":"pr","dts":"11/11/2015 00:00:00 MST","dte":"12/31/2016 23:59:00 MST","segmentid":"9930,9950,1130,1150"}, {"id":"40040","filter":"pr","dts":"11/11/2015 00:00:00 MST","dte":"12/31/2016 23:59:00 MST","segmentid":"9951,1151"}, {"id":"40041","filter":"cm","dts":"11/12/2015 00:00:00 MST","dte":"12/31/2016 23:59:00 MST","segmentid":""}, {"id":"40048","filter":"cm","dts":"01/27/2016 00:00:00 MST","dte":"12/31/2016 23:59:00 MST","segmentid":""}, {"id":"40052","filter":"cm","dts":"05/12/2016 00:00:00 MST","dte":"04/30/2017 23:59:00 MST","segmentid":""}, {"id":"40053","filter":"cm","dts":"05/12/2016 00:00:00 MST","dte":"04/30/2017 23:59:00 MST","segmentid":""}, {"id":"40054","filter":"cm","dts":"05/16/2016 00:00:00 MST","dte":"04/30/2017 23:59:00 MST","segmentid":""}, {"id":"40055","filter":"cm","dts":"05/26/2016 00:00:00 MST","dte":"06/29/2016 23:59:00 MST","segmentid":""}, {"id":"40057","filter":"pr","dts":"06/28/2016 00:00:00 MST","dte":"12/31/2016 23:59:00 MST","segmentid":"1131,9931"}, {"id":"40058","filter":"cm","dts":"06/02/2016 00:00:00 MST","dte":"05/31/2017 23:59:00 MST","segmentid":""}, {"id":"40059","filter":"pr","dts":"07/18/2016 00:00:00 MST","dte":"08/17/2016 23:59:00 MST","segmentid":"9911,1111"}, {"id":"40060","filter":"pr","dts":"07/18/2016 00:00:00 MST","dte":"08/17/2016 23:59:00 MST","segmentid":"9811,1211"}, {"id":"40061","filter":"pr","dts":"07/27/2016 00:00:00 MST","dte":"08/17/2016 23:59:00 MST","segmentid":"9910,1110"}, {"id":"40062","filter":"cm","dts":"08/03/2016 00:00:00 MST","dte":"08/05/2017 23:59:00 MST","segmentid":""}, {"id":"40063","filter":"cm","dts":"09/12/2016 00:00:00 MST","dte":"08/01/2017 23:59:00 MST","segmentid":""}, {"id":"40064","filter":"cm","dts":"09/29/2016 00:00:00 MST","dte":"12/31/2016 23:59:00 MST","segmentid":""}, {"id":"40065","filter":"cm","dts":"11/01/2016 00:00:00 MST","dte":"11/18/2016 23:59:00 MST","segmentid":""}, {"id":"40066","filter":"cm","dts":"10/06/2016 00:00:00 MST","dte":"12/31/2016 23:59:00 MST","segmentid":""}, {"id":"40068","filter":"cm","dts":"10/14/2016 00:00:00 MST","dte":"12/31/2016 23:59:00 MST","segmentid":""}, {"id":"40069","filter":"cm","dts":"10/21/2016 00:00:00 MST","dte":"11/13/2016 23:59:00 MST","segmentid":""}]};
} catch(e) {}
try {
	AMEXUKHP.data.mp1 = { list: [{"id":"MP1001","category":"Marketing Placement Prospect","filter":"pr","headlineText":"GET REWARDED WITH THE PREFERRED REWARDS GOLD CARD","primary_CTA_Text":"Learn more","primary_CTA_Title":"Learn more","tracking_Text":"LearnMore","primary_CTA_URL":"https://www.americanexpress.com/uk/content/gold-card/?filter=membership-customer&linknav=UK-Home-Homepage-Rewards_Cards_Gold_Charge_CM-LearnMore","secondary_CTA_Text":"","secondary_CTA_URL":"","target":"","isMobile":"true","mobileURL":"https://m.americanexpress.com/uk/content/gold-card/","placementImage":"https://www.aexp-static.com/intl/uk/rwd/images/UKHP_promo_1.jpg","dts":"//forever ::00 MST","dte":"//forever ::00 MST"}, {"id":"MP1002","category":"Marketing Placement Card Memeber","filter":"cm","headlineText":"REFER FRIENDS, GET REWARDED","primary_CTA_Text":"See how","primary_CTA_Title":"See how","tracking_Text":"Seehow","primary_CTA_URL":"https://www316.americanexpress.com/iFormsSecure/un/UK/Refer-A-Friend/iforms.do?cuid=emgmUpliftMGMER_en_GB&evtsrc=link&evttype=0&mgmerSource=mgmerHub&CPID=100166263","secondary_CTA_Text":"","secondary_CTA_URL":"","target":"","isMobile":"true","mobileURL":"","placementImage":"https://www.aexp-static.com/intl/uk/rwd/images/UKHP_CM_promo_1.png","dts":"05/16/2016 00:00:00 MST","dte":"12/31/2016 23:59:00 MST"}]};AMEXUKHP.data.mp2 = { list: [{"id":"MP2001","category":"Marketing Placement Prospect","filter":"pr","headlineText":"SAVE 20% WHEN YOU BUY TRAVEL INSURANCE ONLINE","primary_CTA_Text":"Learn more","primary_CTA_Title":"Learn more","tracking_Text":"LearnMore","primary_CTA_URL":"http://insurance.americanexpress.co.uk/travel-insurance/?extlink=adv-ukiis-tr-Amex-Card-Home","secondary_CTA_Text":"","secondary_CTA_URL":"","target":"","isMobile":"false","mobileURL":"","placementImage":"https://www.aexp-static.com/intl/uk/rwd/images/UKHP_promo_2.jpg","dts":"12/21/2015 00:00:00 MST","dte":"//forever ::00 MST"}, {"id":"MP2002","category":"OPEN","filter":"cm","headlineText":"Improved online security","primary_CTA_Text":"Learn more","primary_CTA_Title":"Learn more","tracking_Text":"LearnMore","primary_CTA_URL":"https://www.americanexpress.com/uk/content/safekey-information.html","secondary_CTA_Text":"","secondary_CTA_URL":"","target":"","isMobile":"false","mobileURL":"","placementImage":"https://www.aexp-static.com/intl/uk/rwd/images/UKHP_CM_promo_2.png","dts":"12/21/2015 00:00:00 MST","dte":"12/31/2016 23:59:00 MST"}]};AMEXUKHP.data.mp3 = { list: [{"id":"MP3005","category":"Marketing Placement 3 Card Member","filter":"cm","headlineText":"AN EXCITING NEW WAY TO PAY","primary_CTA_Text":"Learn more","primary_CTA_Title":"Learn more","tracking_Text":"Learnmore","primary_CTA_URL":"https://www.americanexpress.com/uk/content/apple-pay/","secondary_CTA_Text":"","secondary_CTA_URL":"","target":"","isMobile":"true","mobileURL":"https://www.americanexpress.com/uk/content/apple-pay/","placementImage":"https://www.aexp-static.com/intl/uk/rwd/images/UKHP_CM_promo_3.png","dts":"07/13/2015 23:00:00 MST","dte":"12/31/2016 23:59:00 MST"}]};
} catch(e) {} 