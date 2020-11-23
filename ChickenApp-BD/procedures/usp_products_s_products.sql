CREATE DEFINER=`root`@`localhost` PROCEDURE `usp_products_s_products`()
BEGIN
	if (SELECT EXISTS(select * from products)) then
		select * from products where estateProducts=1;
    end if;
END