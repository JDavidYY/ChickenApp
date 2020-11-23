CREATE PROCEDURE `usp_employees_i_type`(nameTypeE VARCHAR(45),descriptionTypeEmployees VARCHAR(200),estateTypeEmployees VARCHAR(45), OUT outResult INT)
BEGIN
	IF (SELECT exists(SELECT * FROM TypeEmployees WHERE nameTypeEmployees=nameTypeE)) = FALSE THEN
		INSERT INTO TypeEmployees (nameTypeEmployees,descriptionTypeEmployees,estateTypeEmployees)
		VALUES (nameTypeE,descriptionTypeEmployees,estateTypeEmployees) ;
        SET outResult = 1 ;
	END IF;
END