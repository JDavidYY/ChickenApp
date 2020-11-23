CREATE DEFINER=`root`@`localhost` PROCEDURE `usp_categories_s_categories`()
BEGIN
	if (SELECT EXISTS(select * from Categories)) then
		select idCategories as "idCategory" , nameCategories as "name" , descriptionCategories as "description" from Categories where estateCategories=1;
    end if;
END
