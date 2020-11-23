CREATE DEFINER=`root`@`localhost` PROCEDURE `usp_categories_s_categories`()
BEGIN
	if (SELECT EXISTS(select * from categories)) then
		select * from categories where estateCategories=1;
    end if;
END