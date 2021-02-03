CREATE DEFINER=`admin`@`%` PROCEDURE `usp_estate_u_company`(out oresult INT)
BEGIN
SET @estateCompanynow = (select estateCompany from Company where idCompanys =1);
IF (@estateCompanynow = 'ABIERTO') THEN
UPDATE Company SET estateCompany='CERRADO' where idCompanys=1;
SET oresult=1;
END IF;

IF (@estateCompanynow = 'CERRADO') THEN
UPDATE Company SET estateCompany='ABIERTO' where idCompanys=1;
SET oresult=1;
END IF;

END