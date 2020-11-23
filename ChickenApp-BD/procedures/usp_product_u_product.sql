CREATE DEFINER=`root`@`localhost` PROCEDURE `usp_product_u_product`(in pproductid int,in pname varchar(45),in pdescription varchar(200),in pprice varchar(150),in pcategoryid int,out oresult int)
BEGIN
	if (SELECT EXISTS(select * from Products where idProducts=pproductid and estateProducts=1)) then
		update Products set nameProducts=pname,descriptionProducts=pdescription,priceProducts=pprice,Categories_idCategories=pcategoryid where idProducts=pproductid;
        if (SELECT EXISTS(select * from Products where idProducts=pproductid and nameProducts=pname and descriptionProducts=pdescription and Categories_idCategories=pcategoryid)) then
            set oresult=1;
        end if;
	end if;
END