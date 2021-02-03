CREATE DEFINER=`admin`@`%` PROCEDURE `usp_activity_u_delivery`(piddelivery varchar(50),out oresult int)
BEGIN

	IF ((select activityEmployees from Employees where idEmployees=piddelivery and TypeEmployees_idDepartaments=3)=1) THEN
	UPDATE Employees Set activityEmployees=0 where idEmployees=piddelivery;
    SET oresult=1;
	else 
	UPDATE Employees Set activityEmployees=1 where idEmployees=piddelivery;
    SET oresult=1;
	END IF;
    
END