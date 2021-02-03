CREATE DEFINER=`admin`@`%` PROCEDURE `usp_orders_u_admin`(pidorder varchar(50),out oresult int)
BEGIN

	set @state_usp=( select estateOrders from Orders where idOrders=pidorder );
    
	IF ( @state_usp ='Confirmado' ) THEN
    UPDATE Orders SET estateOrders='Recibido' where idOrders=pidorder;
    call usp_sales_i_sales(pidorder);
	set oresult=1;
    END IF;
    
    IF ( @state_usp ='Preparando' ) THEN
    UPDATE Orders SET estateOrders='Recibido' where idOrders=pidorder;
	call usp_sales_i_sales(pidorder);
	set oresult=1;
    END IF;

	IF ( @state_usp ='Elaborado') THEN
    UPDATE Orders SET estateOrders='Recibido' where idOrders=pidorder;
	call usp_sales_i_sales(pidorder);
	set oresult=1;
    END IF;

	IF ( @state_usp ='Enviando') THEN
    UPDATE Orders SET estateOrders='Recibido' where idOrders=pidorder;
	call usp_sales_i_sales(pidorder);
	set oresult=1;
    END IF;


END