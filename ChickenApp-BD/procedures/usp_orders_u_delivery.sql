CREATE DEFINER=`admin`@`%` PROCEDURE `usp_orders_u_delivery`(pidorder varchar(50),out oresult int )
BEGIN
    set @state_usp=( select estateOrders from Orders where idOrders=pidorder );
    set @typeorder_usp=(select typeOrders from Orders where idOrders=pidorder);
    
	IF ( @state_usp ='Elaborado' and @typeorder_usp='Delivery'  ) THEN
    UPDATE Orders SET estateOrders='Enviando' where idOrders=pidorder;
    call usp_sales_i_sales(pidorder);
	SET oresult = 1;
    END IF;

	IF ( @state_usp ='Enviando' and @typeorder_usp='Delivery'  ) THEN
    SET @id = (select idDeliveryboys from Orders where idOrders=45);
    UPDATE Orders SET estateOrders='Recibido' where idOrders=pidorder;
    Update Employees set nroPedidos= (nroPedidos -1) where idEmployees= @id;
    call usp_sales_i_sales(pidorder);
    SET oresult = 1;
    END IF;

END