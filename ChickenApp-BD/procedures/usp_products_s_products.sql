CREATE DEFINER=`root`@`localhost` PROCEDURE `usp_products_s_products`()
BEGIN
	if (SELECT EXISTS(select * from Products)) then
		select idProducts as "idProduct" , nameProducts as "name" , descriptionProducts as "description" , priceProducts as "price" , Categories_idCategories as "categoryid" from Products where estateProducts=1;
    end if;
END