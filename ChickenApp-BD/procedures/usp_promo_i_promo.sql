CREATE DEFINER=`admin`@`%` PROCEDURE `usp_promo_i_promo`(in pidproduct varchar(45),in pdescuento varchar(45),out oresult int)
BEGIN
	set @d= (1 - pdescuento/100);
    set @p= (select priceProducts from Products where idProducts=pidproduct );
    set @p=(@p*@d);
	update Products set priceProducts=@p,discountProducts=pdescuento where idProducts=pidproduct;
    set oresult=1;
END