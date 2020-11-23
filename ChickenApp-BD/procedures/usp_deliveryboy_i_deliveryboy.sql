CREATE PROCEDURE `usp_deliveryboy_i_deliveryboy`(pfristname VARCHAR(45),plastname VARCHAR(45),pphone VARCHAR(45),pemail VARCHAR(45), ppassword VARCHAR(45),pdni VARCHAR(20),pworkshift VARCHAR(45),pages VARCHAR(45),OUT oresult INT)
BEGIN
	IF (SELECT exists(SELECT * FROM Users WHERE emailUsers=pemail)) = FALSE THEN
		INSERT INTO Users (idUsers,emailUsers,passwordUsers,typeUser,estateUser)
		VALUES (NULL,'pemail','ppassword','2',1);
        
		SET oresult = MAX(Users.idUsers);
        
		INSERT INTO Employees (idEmployees,activityEmployees,firstnameEmployees,lastnameEmployees,phoneEmployees,workshiftEmployees,dniEmployees,ageEmployees,adressEmployees,TypeEmployees_idDepartaments,Users_idUsers,estateCustomers,estateEmployees,emailEmployees)
		VALUES(NULL,1,'pfristname','plastname','pphone','pworkshift','pdni','pages',NULL,3,@oresult,1,pemail);
		
        SET oresult = 1;
	END IF;
END