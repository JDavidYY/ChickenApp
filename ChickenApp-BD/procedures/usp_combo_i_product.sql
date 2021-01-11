CREATE DEFINER=`admin`@`%` PROCEDURE `usp_combo_i_product`(in pidcombo varchar(50),in pidproduct varchar(50),in pcantidad int ,out oresult int)
BEGIN

	insert into Products_Combo(Products_idProducts,Combo_idCombos,quantity) values (pidproduct,pidcombo,pcantidad);
	set oresult=1;
END