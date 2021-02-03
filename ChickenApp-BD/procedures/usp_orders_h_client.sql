CREATE DEFINER=`admin`@`%` PROCEDURE `usp_orders_h_client`(pidclient varchar(50))
BEGIN

 select idOrders as 'idpedido',dateOrders as 'fechapedido',typeOrders as 'tipopedido',estateOrders as 'estadopedido',priceOrders as 'preciopedido' from Orders inner join Customers ON idcustomerOrders = idCustomers where idcustomerOrders=pidclient and  estateOrders='Recibido'; 
    


END