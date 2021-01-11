CREATE DEFINER=`admin`@`%` PROCEDURE `usp_client_u_password`(pemail varchar(50) , ppassword varchar(255) ,out oresult int)
BEGIN
	set @x = (select idUsers from Users where emailUsers = pemail);
	UPDATE Users SET passwordUsers = ppassword WHERE idUsers = @x;
	set oresult = 1;

END