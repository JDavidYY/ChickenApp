CREATE DEFINER=`root`@`localhost` PROCEDURE `usp_category_u_category`(in pcategoryid int,in pname varchar(45),in pdescription varchar(200),out oresult int)
BEGIN
	if (SELECT EXISTS(select * from Categories where idCategories=pcategoryid and estateCategories=1)) then
		update Categories set nameCategories=pname,descriptionCategories=pdescription where idCategories=pcategoryid;
        if (SELECT EXISTS(select * from Categories where idCategories=pcategoryid and nameCategories=pname and descriptionCategories=pdescription)) then
            set oresult=1;
        end if;
	end if;
END