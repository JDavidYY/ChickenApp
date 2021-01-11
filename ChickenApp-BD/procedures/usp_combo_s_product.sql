CREATE DEFINER=`admin`@`%` PROCEDURE `usp_combo_s_product`(in pidcombo varchar(50))
BEGIN
	select Products_idProducts as "idProduct",nameProducts as " name" , priceProducts as "price",quantity as "cantidad" from ((Products_Combo inner join Products on Products_idProducts=idProducts) inner join Combo on Combo_idCombos=idCombos) where Combo_idCombos=pidcombo and estateCombo=1; 
END