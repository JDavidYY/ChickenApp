CREATE PROCEDURE `usp_deliveryboy_u_deliveryboy`(pfristname VARCHAR(45),plastname VARCHAR(45),pphone VARCHAR(45),pemail VARCHAR(45), ppassword VARCHAR(45),pdni VARCHAR(20),pworkshift VARCHAR(45),pages VARCHAR(45),OUT oresult INT)
BEGIN
	IF (SELECT exists(SELECT * FROM Users WHERE emailUsers = pemail)) = TRUE THEN
		UPDATE Employees
        SET
			firstnameEmployees = 'pfristname' ,
            lastnameEmployees = 'plastname',
            phoneEmployees = 'pphone',
            workshiftEmployees = 'pworkshift' ,
            dniEmployees = 'pdni',
            ageEmployees = 'pages'
            
        WHERE    
            Employees.dniEmployees =  pdni ;
		SET oresult = (SELECT idUsers FROM Users WHERE emailUsers = pemail);
        UPDATE Users
        SET
			emailUsers = 'pemail' ,
            passwordUsers = 'ppassword'
        WHERE    
            idUsers =  oresult ;
        
        SET oresult = 1;
	END IF;
END