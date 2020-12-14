CREATE DEFINER=`admin`@`%` PROCEDURE `usp_promo_d_promo`(in pidproduct varchar(45),out oresult int)
BEGIN
	update Products set priceProducts=(priceProducts/(1-discountProducts/100)),discountProducts=0 where idProducts=pidproduct;
    set oresult=1;
END