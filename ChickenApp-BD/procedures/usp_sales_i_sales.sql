CREATE DEFINER=`admin`@`%` PROCEDURE `usp_sales_s_sales`()
BEGIN

Select idSale as 'idventa',totalSale as 'totalventa',igvSale as 'impuestoventa',dateSale as 'fechaventa',Order_idOrder as 'idpedido',typeOrders as 'tipopedido',firstnameCustomers as 'nombrecliente',lastnameCustomers as 'apellidocliente' from ((Orders inner join Sales ON idOrders=Order_idOrder) inner join Customers ON idcustomerOrders=idCustomers);

END