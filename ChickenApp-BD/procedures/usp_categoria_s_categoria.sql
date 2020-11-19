CREATE DEFINER=`root`@`localhost` PROCEDURE `usp_categoria_s_categoria`(id int)
BEGIN
	if id=0 then
		select * from categories;
	end if;
    if id!=0 then
		select * from categories where idCategories=id;
	end if;
END