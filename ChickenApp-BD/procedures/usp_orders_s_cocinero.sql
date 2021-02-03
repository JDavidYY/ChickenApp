CREATE DEFINER=`admin`@`%` PROCEDURE `usp_orders_s_cocinero`()
BEGIN

select idOrders as 'idpedido',dateOrders as 'fechapedido',estateOrders as 'estadopedido' from Orders where estateOrders='Preparando' or estateOrders='Confirmado';

END