CREATE DEFINER=`admin`@`%` PROCEDURE `usp_combo_d_combo`(in pidcombo varchar(50),out oresult int)
BEGIN
	UPDATE Combo SET estateCombo = '0' WHERE (idCombos = pidcombo);
END