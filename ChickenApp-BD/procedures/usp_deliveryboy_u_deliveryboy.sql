CREATE PROCEDURE `usp_deliveryboy_u_deliveryboy`(piddeliveryboy  VARCHAR(45), pfirstname VARCHAR(45),plastname VARCHAR(45),pphone VARCHAR(45) ,pemail VARCHAR(50) ,padress VARCHAR(50),pdni VARCHAR(20),pworkshift VARCHAR(45),pages VARCHAR(45),OUT oresult INT)
BEGIN
	IF (SELECT exists(SELECT * FROM Employees WHERE idEmployees = piddeliveryboy)) = TRUE THEN
		UPDATE Employees
        SET
			firstnameEmployees = pfirstname ,
            lastnameEmployees = plastname,
            dniEmployees = pdni,
            phoneEmployees = pphone,
            workshiftEmployees = pworkshift ,
            ageEmployees = pages,
            emailEmployees=pemail,
            adressEmployees=padress
            
        WHERE    
             idEmployees = piddeliveryboy;

        UPDATE Users SET emailUsers = pemail  WHERE  idUsers =  (select Users_idUsers from Employees where idEmployees = piddeliveryboy );
        
        SET oresult = 1;
	END IF;
END ;