CREATE DEFINER=`root`@`localhost` PROCEDURE `usp_category_i_category`(in pname varchar(45) ,in pdescription varchar(200),out oresult int)
BEGIN
	if (SELECT EXISTS(select * from Categories where nameCategories=pname))=false then
		insert into Categories (nameCategories,descriptionCategories,estateCategories) values (pname,pdescription,1);
		if (SELECT EXISTS(select * from Categories where nameCategories=pname and descriptionCategories=pdescription and estateCategories=1)) then
            set oresult=1;
        end if;
	end if;
END