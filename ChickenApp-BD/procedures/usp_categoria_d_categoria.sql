CREATE DEFINER=`root`@`localhost` PROCEDURE `usp_categoria_d_categoria`(inout id int)
BEGIN
	if (SELECT EXISTS(select * from categories where idCategories=id and estateCategories=1)) then
		update categories set estateCategories=0 where idCategories=id;
        if (SELECT EXISTS(select * from categories where idCategories=id and estateCategories=0)) then
            select idCategories into id from categories where idCategories=id and estateCategories=0;
        end if;
	end if;
END