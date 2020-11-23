CREATE DEFINER=`root`@`localhost` PROCEDURE `usp_producto_d_producto`(inout id int)
BEGIN
	if (SELECT EXISTS(select * from products where idProducts=id and estateProducts=1)) then
		update products set estateProducts=0 where idProducts=id;
        if (SELECT EXISTS(select * from products where idProducts=id and estateProducts=0)) then
            select idProducts into id from products where idProducts=id and estateProducts=0;
        end if;
	end if;
END