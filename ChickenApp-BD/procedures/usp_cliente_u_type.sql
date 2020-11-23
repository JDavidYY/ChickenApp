CREATE PROCEDURE `usp_cliente_u_type`(IN IdtE INT,nameTypeE VARCHAR(45),descriptionTypeEmployees VARCHAR(200),estateTypeEmployees VARCHAR(45), OUT outResult INT)
BEGIN
	IF (SELECT exists(SELECT * FROM TypeEmployees WHERE idTypeEmployees=IdtE)) = FALSE THEN
		UPDATE TypeEmployees
		SET nameTypeEmployees= 'nameTypeE',
			descriptionTypeEmployees = 'descriptionTypeEmployees',
			estateTypeEmployees = 'estateTypeEmployees' 
		WHERE idTypeEmployees=IdtE;
        SET outResult = 1 ;
	END IF;
END