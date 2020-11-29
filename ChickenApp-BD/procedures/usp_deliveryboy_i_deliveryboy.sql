CREATE PROCEDURE `usp_deliveryboy_i_deliveryboy`(pfirstname VARCHAR(45),plastname VARCHAR(45),pphone VARCHAR(45),pemail VARCHAR(45), padress VARCHAR(45), ppassword VARCHAR(45),pdni VARCHAR(20),pworkshift VARCHAR(45),pages VARCHAR(45),OUT oresult INT)
BEGIN
	
	IF (SELECT EXISTS(SELECT * FROM Users WHERE emailUsers=pemail)) = FALSE THEN
		INSERT INTO Users (emailUsers,passwordUsers,typeUser,estateUser)
		VALUES (pemail,ppassword,'4',1);
        
		INSERT INTO Employees (activityEmployees,firstnameEmployees,lastnameEmployees,phoneEmployees,workshiftEmployees,dniEmployees,ageEmployees,adressEmployees,TypeEmployees_idDepartaments,Users_idUsers,estateEmployees,emailEmployees)
		VALUES(1,pfirstname,plastname,pphone,pworkshift,pdni,pages,padress,3,(SELECT MAX(idUsers) FROM Users),1,pemail);
		
        SET oresult = 1;
	END IF;
END ;