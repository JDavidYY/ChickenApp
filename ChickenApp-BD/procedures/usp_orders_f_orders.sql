CREATE DEFINER=`admin`@`%` PROCEDURE `usp_orders_f_orders`(pidorder varchar(50))
BEGIN
if ((SELECT exists(Select * from OrdersProducts where Orders_idOrders=pidorder )) and (SELECT exists(Select * from OrdersCombo where Orders_idOrders=pidorder ))) then

 DROP TABLE IF EXISTS tempordersdetails1;
 DROP TABLE IF EXISTS tempordersdetails2;
 CREATE TEMPORARY TABLE tempordersdetails1 as select Products_idProducts as 'id',nameProducts as 'name',typeImages as 'type',quantityOrdersProducts as 'quanity',commentaryOrdersProducts as 'commentary',priceOrdersProducts as 'price' from ((OrdersProducts inner join Products on idProducts=Products_idProducts) inner join Images on idProducts=idreferenceImages) where Orders_idOrders=pidorder;
 CREATE TEMPORARY TABLE tempordersdetails2 as select Combo_idCombos  as 'id',nombreCombo as 'name',typeImages  as 'type', quantityOrdersCombo as 'quanity',commentaryOrdersCombo  as 'commentary',priceOrdersCombo as 'price' from ((Combo inner join OrdersCombo on idCombos=Combo_idCombos) inner join Images ON idCombos=idreferenceImages) where Orders_idOrders=pidorder;
 SELECT * FROM tempordersdetails1 UNION SELECT * FROM tempordersdetails2;
 
else if((SELECT exists(Select * from OrdersProducts where Orders_idOrders=pidorder )) ) then

        DROP TABLE IF EXISTS tempordersdetails1;
	    CREATE TEMPORARY TABLE tempordersdetails1 as select Products_idProducts as 'id',nameProducts as 'name',typeImages as 'type',quantityOrdersProducts as 'quanity',commentaryOrdersProducts as 'commentary',priceOrdersProducts as 'price' from ((OrdersProducts inner join Products on idProducts=Products_idProducts) inner join Images on idProducts=idreferenceImages) where Orders_idOrders=pidorder;
		select * from tempordersdetails1;
        
	else  
    
		 DROP TABLE IF EXISTS tempordersdetails2;
         CREATE TEMPORARY TABLE tempordersdetails2 as select Combo_idCombos  as 'id',nombreCombo as 'name',typeImages  as 'type', quantityOrdersCombo as 'quanity',commentaryOrdersCombo  as 'commentary',priceOrdersCombo as 'price' from ((Combo inner join OrdersCombo on idCombos=Combo_idCombos) inner join Images ON idCombos=idreferenceImages) where Orders_idOrders=pidorder;
		 select * from tempordersdetails2;

	end if;
end if;