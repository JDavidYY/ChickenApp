CREATE DEFINER=`root`@`localhost` PROCEDURE `usp_categories_s_categories`()
BEGIN
	if (SELECT EXISTS(select * from categories)) then
		select idCategories as "idCategory" , nameCategories as "name" , descriptionCategories as "description" from categories where estateCategories=1;
    end if;
END
