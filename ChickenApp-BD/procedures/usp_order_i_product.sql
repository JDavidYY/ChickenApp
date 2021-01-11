CREATE DEFINER=`admin`@`%` PROCEDURE `usp_order_i_product`( pidorder varchar(50),pidproduct varchar(50),pcantidad varchar(50),ptype varchar(50),pcomment varchar(150),out result INT)
BEGIN

if (ptype = 'product') then
	set @productprice = (select priceProducts from Products where idProducts=pidproduct)*pcantidad;
    insert into OrdersProducts values (pidorder,pidproduct,pcantidad,pcomment,@productprice);
    UPDATE Orders SET priceOrders = (priceOrders+@productprice) where idOrders = pidorder;
		
end if;

if (ptype = 'combo') then
	set @comboprice = (select sum(quantity*priceProducts) as 'price' from Products_Combo inner join Products on Products_idProducts=idProducts where Combo_idCombos= pidproduct GROUP BY Combo_idCombos ) *pcantidad;
	insert into OrdersCombo values (pidorder,pidproduct,pcantidad,pcomment,@comboprice);
	UPDATE Orders SET priceOrders = (priceOrders+@comboprice) where idOrders = pidorder;
	
end if;

END