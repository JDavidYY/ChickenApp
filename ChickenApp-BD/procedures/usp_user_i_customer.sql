CREATE DEFINER=`root`@`localhost` PROCEDURE `usp_user_i_customer`(pfristname VARCHAR(45),plastname VARCHAR(45),pphone VARCHAR(45),pemail VARCHAR(45), padress VARCHAR(100),ppassword VARCHAR(45),OUT oresult INT)
BEGIN
	IF (SELECT exists(SELECT * FROM Users WHERE emailUsers=pemail)) = FALSE THEN
		INSERT INTO Users (idUsers,emailUsers,passwordUsers,typeUser,estateUser)
		VALUES (NULL,'pemail','ppassword','1',1);
        
		SET oresult = MAX(Users.idUsers);
        
		INSERT INTO Customers (idCustomers,firstnameCustomers,lastnameCustomers,phoneCustomers,emailCustomers,adressCustomers,Users_idUsers,estateCustomers)
		VALUES(NULL,'pfristname','plastname','pphone','pemail','padress',@oresult,1);
		
        SET oresult = 1;
	END IF;
END