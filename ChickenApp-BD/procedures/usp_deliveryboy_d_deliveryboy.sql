CREATE PROCEDURE `usp_deliveryboy_d_deliveryboy`(piddeleveryboy VARCHAR(20),OUT oresult INT)
BEGIN
	IF (SELECT exists(SELECT * FROM Employees WHERE idEmployees=piddeleveryboy)) = TRUE THEN
		UPDATE Employees SET estateEmployees = 0 WHERE idEmployees=piddeleveryboy;
		UPDATE Users SET estateUser = 0 WHERE idUsers=(select Users_idUsers from Employees where idEmployees=piddeleveryboy);
        SET oresult = 1;
	END IF;
END ;