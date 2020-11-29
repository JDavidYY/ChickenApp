CREATE PROCEDURE `usp_chef_d_chef`(pidchef VARCHAR(20),OUT oresult INT)
BEGIN
	IF (SELECT exists(SELECT * FROM Employees WHERE idEmployees=pidchef)) = TRUE THEN
		UPDATE Employees SET estateEmployees = 0 WHERE idEmployees=pidchef;
		UPDATE Users SET estateUser = 0 WHERE idUsers=(select Users_idUsers from Employees where idEmployees=pidchef);
        SET oresult = 1;
	END IF;
END ;