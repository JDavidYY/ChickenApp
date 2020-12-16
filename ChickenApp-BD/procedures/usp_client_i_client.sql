CREATE DEFINER=`admin`@`%` PROCEDURE `usp_client_i_client`(IN pfirstname VARCHAR(45),IN plastname VARCHAR(45),IN pphone VARCHAR(45),IN pemail VARCHAR(45),IN padress VARCHAR(100),IN ppassword VARCHAR(255),OUT oresult INT)
BEGIN
	IF (SELECT exists(SELECT * FROM Users WHERE emailUsers=pemail)) = FALSE THEN
		INSERT INTO Users (idUsers,emailUsers,passwordUsers,typeUser,estateUser)
		VALUES (NULL,pemail,ppassword,'1',1);
        
		INSERT INTO Customers (idCustomers,firstnameCustomers,lastnameCustomers,phoneCustomers,emailCustomers,adressCustomers,Users_idUsers,estateCustomers)
		VALUES(NULL,pfirstname,plastname,pphone,pemail,padress,(SELECT MAX(idUsers) FROM Users),1);
		
        SET oresult = 1;
	END IF;
END