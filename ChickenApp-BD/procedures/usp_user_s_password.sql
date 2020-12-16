CREATE DEFINER=`admin`@`%` PROCEDURE `usp_user_s_password`(in pemail varchar(45),out oresult varchar(255))
BEGIN

     set oresult=(select passwordUsers from Users where emailusers=pemail);
     
END