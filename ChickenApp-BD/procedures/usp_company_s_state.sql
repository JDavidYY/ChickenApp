CREATE DEFINER=`admin`@`%` PROCEDURE `usp_company_s_state`()
BEGIN

	select estateCompany as 'stateCompany' from Company where idCompanys=1;

END