CREATE DEFINER=`root`@`localhost` PROCEDURE `usp_categoria_s_categoria`()
BEGIN
	if (SELECT EXISTS(select * from categories)) then
		select * from categories where estateCategories=1;
    end if;
END