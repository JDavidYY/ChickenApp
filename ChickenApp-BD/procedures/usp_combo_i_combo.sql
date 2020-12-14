CREATE DEFINER=`admin`@`%` PROCEDURE `usp_combo_i_combo`(in pnombre varchar(50),in pdescription varchar(100),out oresult int)
BEGIN
	insert into Combo (nombreCombo,descriptionCombo) values (pnombre,pnombre);
    set oresult=(SELECT MAX(idCombos) FROM Combo);
END