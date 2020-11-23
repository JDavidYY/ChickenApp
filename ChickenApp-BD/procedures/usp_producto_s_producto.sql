CREATE DEFINER=`root`@`localhost` PROCEDURE `usp_producto_s_producto`()
BEGIN
	if (SELECT EXISTS(select * from products)) then
		select * from products where estateProducts=1;
    end if;
END