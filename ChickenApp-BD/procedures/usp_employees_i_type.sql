CREATE PROCEDURE `usp_cliente_i_type`(nameTypeE VARCHAR(45),descriptionTypeEmployees VARCHAR(200),estateTypeEmployees VARCHAR(45))
BEGIN
	IF (SELECT exists(SELECT * FROM TypeEmployees WHERE nameTypeEmployees=nameTypeE)) = FALSE THEN
		INSERT INTO TypeEmployees (nameTypeEmployees,descriptionTypeEmployees,estateTypeEmployees)
		VALUES ('nameTypeE','descriptionTypeEmployees','estateTypeEmployees') ;
    ELSE
		SELECT "Este campo ya existe";
	END IF;
END