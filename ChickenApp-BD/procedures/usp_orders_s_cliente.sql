CREATE DEFINER=`admin`@`%` PROCEDURE `usp_orders_s_client`(pidclient varchar(50))
BEGIN

 select idOrders as 'idpedido',dateOrders as 'fechapedido',typeOrders as 'tipopedido',estateOrders as 'estadopedido',priceOrders as 'preciopedido',firstnameEmployees as 'nombredelivery',phoneEmployees as 'phonedelivery' from ((Orders inner join Customers ON idcustomerOrders = idCustomers) inner join Employees ON idDeliveryboys=idEmployees) where idcustomerOrders=pidclient and  estateOrders <> 'Recibido'; 

END