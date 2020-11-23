CREATE DEFINER=`root`@`localhost` PROCEDURE `usp_product_d_product`(in pproductid int,out oresult int)
BEGIN
	if (SELECT EXISTS(select * from products where idProducts=pproductid and estateProducts=1)) then
		update products set estateProducts=0 where idProducts=pproductid;
        if (SELECT EXISTS(select * from products where idProducts=pproductid and estateProducts=0)) then
            set oresult=1;
        end if;
	end if;
END