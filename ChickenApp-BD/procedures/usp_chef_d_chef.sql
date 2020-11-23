CREATE PROCEDURE `usp_chef_d_chef`(dni VARCHAR(20),OUT oresult INT)
BEGIN
	IF (SELECT exists(SELECT * FROM Employees WHERE dniEmployees=dni)) = TRUE THEN
		UPDATE Employees
        SET 
		estateEmployees = 0 
        WHERE dniEmployees=dni;
        SET oresult = 1;
	END IF;
END