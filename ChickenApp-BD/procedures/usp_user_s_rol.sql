CREATE DEFINER=`admin`@`%` PROCEDURE `usp_user_s_rol`(in pemail varchar(45))
BEGIN

      set @tipo = (select typeUser from Users where emailusers=pemail);
      
      --  ////// TIPO CLIENTE ////////////////////////////////////////
      IF ( @tipo = '1' ) THEN
        select typeUser,idCustomers as "idClient" , firstnameCustomers as "firstname" , lastnameCustomers as "lastname" , phoneCustomers as "phone" , adressCustomers as "adress", emailCustomers as "email",passwordUsers as "password" from Customers inner join Users ON Customers.emailCustomers = Users.emailUsers where emailUsers=pemail;
      END IF;
      
      --  ////// TIPO ADMIN ///////////////AUN NO DEFINIDO///////////////
      IF ( @tipo = '2' ) THEN
         select typeUser from Users where emailusers=pemail;
	  END IF;     
      
       --  ////// TIPO COCINERO ////////////////////////////////////////
       IF ( @tipo = '3' ) THEN
      
         select typeUser,idEmployees as "idChef" , firstnameEmployees as "firstname" , lastnameEmployees as "lastname" , dniEmployees as "dni" , phoneEmployees as "phone" , workshiftEmployees as "workshift", ageEmployees as "age", emailEmployees as "email",passwordUsers as "password", adressEmployees as "adress" from Employees inner join Users ON Employees.emailEmployees = Users.emailUsers where emailUsers=pemail;
	  END IF;
      
      --  ////// TIPO DELIVERY ////////////////////////////////////////
      IF ( @tipo = '4' ) THEN
      
         select typeUser ,idEmployees as "idDeliveryboy" , firstnameEmployees as "firstname" , lastnameEmployees as "lastname" , dniEmployees as "dni" , phoneEmployees as "phone" , workshiftEmployees as "workshift", ageEmployees as "age", emailEmployees as "email",passwordUsers as "password", adressEmployees as "adress" from Employees inner join Users ON Employees.emailEmployees = Users.emailUsers where emailUsers=pemail;
         
	  END IF;
     
     
END