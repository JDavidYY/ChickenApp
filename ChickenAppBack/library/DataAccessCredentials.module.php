<?php
namespace Library\DataBase;
	// abstract class DataAccessCredentials {
	// 	const ConnectionServer = '104.198.143.83'; //'mysql19.ezhostingserver.com'; //localhost';
	//     const ConnectionUsername = 'root'; //'itlandperu_dba'; //'wwwopecg_dba';
	//     const ConnectionPassword = 'IT1@nd#485263'; //'#A1b2c3d4$'; //'#a1b2c3d4';
	//     const ConnectionDatabase = 'chatbot_centrum'; //'itlandperu_dbTicketBot'; //'wwwopecg_intranet';
	//     const ConnectionProjectid = 'itland-database';
	//     const ConnectionRegion = 'us-central1';
	//     const ConnectionInstancename = 'itland';
	//     //const $ConnectionString = '';
	// }

	abstract class DataAccessCredentials {
		const ConnectionServer = 'chickenbd.cnbkvdycd5ib.us-east-2.rds.amazonaws.com'; //'mysql19.ezhostingserver.com'; //localhost';
	    const ConnectionUsername = 'admin'; //'itlandperu_dba'; //'wwwopecg_dba';
	    const ConnectionPassword = '14200186'; //'#A1b2c3d4$'; //'#a1b2c3d4';
		const ConnectionDatabase = 'Chickenapp'; //'itlandperu_dbTicketBot'; //'wwwopecg_intranet';
	    const ConnectionProjectid = NULL;
	    const ConnectionRegion = NULL;
	    const ConnectionInstancename = NULL;
		/*const ConnectionDatabase = 'Chickenapp'; //'itlandperu_dbTicketBot'; //'wwwopecg_intranet';
	    const ConnectionProjectid = 'chickenapp-dev';
	    const ConnectionRegion = 'us-central1';
	    const ConnectionInstancename = 'chickenappbd';*/
	    //const $ConnectionString = '';
	}

?>