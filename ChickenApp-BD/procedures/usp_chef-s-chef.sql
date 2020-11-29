CREATE PROCEDURE `usp_chefs_s_chefs`()
BEGIN
	if (SELECT EXISTS(select * from Employees)) then
		select idEmployees as "idChef" , firstnameEmployees as "firstname" , lastnameEmployees as "lastname", dniEmployees as "dni" , phoneEmployees as "phone" , workshiftEmployees as "workshift", ageEmployees as "age" , emailEmployees as "email"  from Employees where estateEmployees=1 and TypeEmployees_idDepartaments=2;
    end if;
END ;