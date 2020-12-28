CREATE DEFINER=`root`@`localhost` PROCEDURE `usp_category_d_category`(in pcategoryid int,out oresult int)
BEGIN
	if (SELECT EXISTS(select * from Categories where idCategories=pcategoryid and estateCategories=1)) then
		update Categories set estateCategories=0 where idCategories=pcategoryid;
        if (SELECT EXISTS(select * from Categories where idCategories=pcategoryid and estateCategories=0)) then
            set oresult=1;
        end if;
	end if;
END