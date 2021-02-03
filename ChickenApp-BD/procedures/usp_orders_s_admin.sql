CREATE DEFINER=`admin`@`%` PROCEDURE `usp_orders_s_admin`()
BEGIN
 if ((SELECT exists(Select * from Orders where typeOrders='Delivery' )) and (SELECT exists(Select * from Orders where typeOrders='PickeUp' ))) then
 set @campo_order_s_admin='';
 DROP TABLE IF EXISTS tempordersadmin1;
 DROP TABLE IF EXISTS tempordersadmin2;
 CREATE TEMPORARY TABLE tempordersadmin1 as select idOrders as 'idpedido',dateOrders as 'fechapedido',typeOrders as 'tipopedido',estateOrders as 'estadopedido',idDeliveryboys as 'iddelivery',firstnameEmployees as 'nombredelivery',priceOrders as 'preciopedido',idcustomerOrders as 'idcliente',firstnameCustomers as 'nombrecliente' from ((Orders inner join Employees on idDeliveryboys=idEmployees) inner join Customers on idcustomerOrders= idCustomers) where typeOrders='Delivery';
 CREATE TEMPORARY TABLE tempordersadmin2 as select idOrders as 'idpedido',dateOrders as 'fechapedido',typeOrders as 'tipopedido',estateOrders as 'estadopedido',@campo_order_s_admin as 'iddelivery',@campo_order_s_admin as 'nombredelivery',priceOrders as 'preciopedido',idcustomerOrders as 'idcliente',firstnameCustomers as 'nombrecliente' from Orders  inner join Customers on idcustomerOrders= idCustomers where typeOrders='PickeUp';
  SELECT * FROM tempordersadmin1 UNION SELECT * FROM tempordersadmin2;
 
 else if((SELECT exists(Select * from Orders where typeOrders='Delivery' )) ) then

	DROP TABLE IF EXISTS tempordersadmin1;
	CREATE TEMPORARY TABLE tempordersadmin1 as select idOrders as 'idpedido',dateOrders as 'fechapedido',typeOrders as 'tipopedido',estateOrders as 'estadopedido',idDeliveryboys as 'iddelivery',firstnameEmployees as 'nombredelivery',priceOrders as 'preciopedido',idcustomerOrders as 'idcliente',firstnameCustomers as 'nombrecliente' from ((Orders inner join Employees on idDeliveryboys=idEmployees) inner join Customers on idcustomerOrders= idCustomers) where typeOrders='Delivery';
    select * from tempordersadmin1;
	
	else  
	     set @campo_order_s_admin='';
		 DROP TABLE IF EXISTS tempordersadmin2;
         CREATE TEMPORARY TABLE tempordersadmin2 as select idOrders as 'idpedido',dateOrders as 'fechapedido',typeOrders as 'tipopedido',estateOrders as 'estadopedido',@campo_order_s_admin as 'iddelivery',@campo_order_s_admin as 'nombredelivery',priceOrders as 'preciopedido',idcustomerOrders as 'idcliente',firstnameCustomers as 'nombrecliente' from Orders  inner join Customers on idcustomerOrders= idCustomers where typeOrders='PickeUp';
		 select * from tempordersadmin2;

	 end if;
end if;
END