CREATE PROCEDURE `usp_deliveryboy_f_deliveryboy`( IN piddeliveryboy VARCHAR(45))
BEGIN
	IF (SELECT EXISTS(select * from Employees)) then
		select idEmployees as "idDeliveryboy",firstnameEmployees as "firstname" , lastnameEmployees as "lastname", dniEmployees as "dni" , phoneEmployees as "phone" , workshiftEmployees as "workshift", ageEmployees as "age" , emailEmployees as "email",adressEmployees as "adress"  from Employees where estateEmployees=1 and idEmployees = piddeliveryboy;
    END IF;
END ;