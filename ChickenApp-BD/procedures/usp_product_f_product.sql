CREATE DEFINER=`admin`@`%` PROCEDURE `usp_product_d_product`(in pproductid int,out oresult int)
BEGIN
	if (SELECT EXISTS(select * from Products where idProducts=pproductid and estateProducts=1)) then
		update Products set estateProducts=0 where idProducts=pproductid;
		set oresult=1;
	end if;
END