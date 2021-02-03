CREATE DEFINER=`admin`@`%` PROCEDURE `usp_orders_s_delivery`(piddelivery varchar(50))
BEGIN

	select idOrders as 'idpedido',dateOrders as 'fechapedido',estateOrders as 'estadopedido',priceOrders as 'preciopedido',firstnameCustomers as 'nombrecliente',adressCustomers as 'direccioncliente',phoneCustomers as 'phonecliente' from Orders inner join Customers ON idcustomerOrders = idCustomers where idDeliveryboys = piddelivery and  estateOrders <> 'Recibido';
    
END