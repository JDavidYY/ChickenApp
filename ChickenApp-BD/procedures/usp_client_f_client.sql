CREATE DEFINER=`admin`@`%` PROCEDURE `usp_client_f_client`( pidclient varchar(50))
BEGIN
	select idCustomers as 'idClient',firstnameCustomers as 'firstname',lastnameCustomers as 'lastname',phoneCustomers as 'phone',adressCustomers as 'adress',emailCustomers as 'email'   from Customers where idCustomers = pidclient;    
END