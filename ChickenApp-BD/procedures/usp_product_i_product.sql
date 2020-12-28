CREATE DEFINER=`root`@`localhost` PROCEDURE `usp_product_i_product`(in pname varchar(45),in pdescription varchar(200),in pprice varchar(150),in  pcategoryid int,out oresult int)
BEGIN
	if (SELECT EXISTS(select * from Products where nameProducts=pname))=false then
		insert into Products (nameProducts,descriptionProducts,priceProducts,Categories_idCategories,estateProducts) values (pname,pdescription,pprice,pcategoryid,1);
		if (SELECT EXISTS(select * from Products where nameProducts=pname and descriptionProducts=pdescription and estateProducts=1 and Categories_idCategories=pcategoryid)) then
            set oresult=1;
        end if;
	end if;
END