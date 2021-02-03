CREATE DEFINER=`admin`@`%` PROCEDURE `usp_orders_u_cocinero`(pidorder varchar(50), out oresult INT)
BEGIN
	set @state_usp=( select estateOrders from Orders where idOrders=pidorder );
	IF ( @state_usp ='Confirmado' ) THEN
    UPDATE Orders SET estateOrders='Preparando' where idOrders=pidorder;
	set oresult=1;
    END IF;
    
    IF ( @state_usp ='Preparando' ) THEN
    UPDATE Orders SET estateOrders='Elaborado' where idOrders=pidorder;
	set oresult=1;
    END IF;

END