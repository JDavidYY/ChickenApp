CREATE DEFINER=`admin`@`%` PROCEDURE `usp_combo_i_combo`(in pnombre VARCHAR(50),in pdescription VARCHAR(100),out oresult INT)
BEGIN
	INSERT INTO Combo (nombreCombo,descriptionCombo) 
    VALUES (pnombre,pnombre);
    SET oresult = (SELECT MAX(idCombos) FROM Combo);
END