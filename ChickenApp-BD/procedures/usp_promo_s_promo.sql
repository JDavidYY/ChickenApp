CREATE DEFINER=`admin`@`%` PROCEDURE `usp_promo_s_promo`()
BEGIN
	if (SELECT EXISTS(select * from Products)) then
		select idProducts as "idProduct" , nameProducts as "name" , descriptionProducts as "description" , priceProducts as "price" , Categories_idCategories as "categoryid",discountProducts as "descuento" from Products where estateProducts=1;

    end if;
END