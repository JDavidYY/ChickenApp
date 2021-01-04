CREATE DEFINER=`admin`@`%` PROCEDURE `usp_client_u_client`(IN idclient INT,IN pfirstname VARCHAR(45),IN plastname VARCHAR(45),IN pphone VARCHAR(45),IN padress VARCHAR(100),OUT oresult INT)
BEGIN
	IF (SELECT EXISTS(SELECT * FROM Users WHERE idCustomers=idclient)) = FALSE THEN
		UPDATE Customers 
		SET firstnameCustomers = pfirstname,lastnameCustomers = plastname ,phoneCustomers = pphone,adressCustomers = padress
		WHERE idCustomers=idclient;
        SET oresult = 1;
	END IF;
END