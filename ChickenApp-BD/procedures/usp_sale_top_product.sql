CREATE DEFINER=`admin`@`%` PROCEDURE `usp_sale_top_product`()
BEGIN
	DROP TABLE IF EXISTS temptopsales;
	CREATE TEMPORARY TABLE temptopsales as (select  nameProducts as 'nombreproducto',Products_idProducts as 'idproducto' ,sum(quantityOrdersProducts) as 'cantidad'  from OrdersProducts inner join Products on Products_idProducts= idProducts group by Products_idProducts) UNION (select nameProducts as 'nombreproducto',Products_idProducts as 'idproducto' ,quantityOrdersCombo*sum(quantity) as 'cantidad'  from ((Products_Combo inner join OrdersCombo on Combo_idComboz = Combo_idCombos) inner join Products on Products_idProducts = idProducts ) group by Products_idProducts);
	select idproducto as 'idProduct' ,nombreproducto as 'name', sum(cantidad) as 'cantidad' from temptopsales group by idproducto ORDER BY sum(cantidad) DESC LIMIT 5;
END