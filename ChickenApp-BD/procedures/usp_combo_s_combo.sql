CREATE DEFINER=`admin`@`%` PROCEDURE `usp_combo_s_combo`()
BEGIN

	CREATE or REPLACE VIEW viewcombo1 as select idCombos,nombreCombo,descriptionCombo , filenameImages, typeImages , tmpImages from Combo inner join Images ON idCombos=idreferenceImages where estateCombo =1;

	CREATE or REPLACE VIEW viewcombo2 as select Combo_idCombos as 'Combo_idCombos',sum(quantity*priceProducts) as 'price' from Products_Combo inner join Products on Products_idProducts=idProducts GROUP BY Combo_idCombos;   

	select idCombos as "idCombo",nombreCombo as "name",descriptionCombo as "description" , filenameImages as 'image_name', typeImages as 'image_type', tmpImages as 'file_name',price from viewcombo1 inner join viewcombo2 ON idCombos=Combo_idCombos;
    
END