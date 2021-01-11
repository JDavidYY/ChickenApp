CREATE DEFINER=`admin`@`%` PROCEDURE `usp_orders_i_orders`(ptypeorder varchar(50),pidclient varchar(50),out oresult int)
BEGIN

SET @@session.time_zone = "-05:00";
if (ptypeorder = 'R') then
		set @fecha = now();
		insert into Orders (dateOrders,typeOrders,estateOrders,priceOrders,idcustomerOrders) values (@fecha,'PickeUp','Confirmado',0,pidclient);
        
        set oresult=(select MAX(idOrders) from Orders);
end if;

if (ptypeorder = 'D') then
		set @fecha = now();
        set @delivery = (select idEmployees from Employees where TypeEmployees_idDepartaments=3  Order by nroPedidos asc limit 1); 
        
		insert into Orders (dateOrders,typeOrders,estateOrders,idDeliveryboys,priceOrders,idcustomerOrders) values (@fecha,'Delivery','Confirmado', @delivery,0,pidclient);
        
        UPDATE Employees SET nroPedidos = (nroPedidos+1) WHERE idEmployees=@delivery;
       
        set oresult=(select MAX(idOrders) from Orders);
end if;

END