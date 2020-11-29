CREATE PROCEDURE `usp_deliveryboys_s_deliveryboys`()
BEGIN
	if (SELECT EXISTS(select * from Employees)) then
		select idEmployees as "idDeliveryboy" , firstnameEmployees as "firstname" , lastnameEmployees as "lastname", dniEmployees as "dni" , phoneEmployees as "phone" , workshiftEmployees as "workshift", ageEmployees as "age" , emailEmployees as "email"  from Employees where estateEmployees=1 and TypeEmployees_idDepartaments=3;
    end if;
END ;