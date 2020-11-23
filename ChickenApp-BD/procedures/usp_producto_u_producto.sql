CREATE DEFINER=`root`@`localhost` PROCEDURE `usp_producto_u_producto`(inout id int,in nombre varchar(45),in descripcion varchar(200),in precio varchar(150),in imagen varchar(150),in id_categories int)
BEGIN
	if (SELECT EXISTS(select * from products where idProducts=id and estateProducts=1)) then
		update products set nameProducts=nombre,descriptionProducts=descripcion,priceProducts=precio,imageProducts=imagen,Categories_idCategories=id_categories where idProducts=id;
        if (SELECT EXISTS(select * from products where idProducts=id and nameProducts=nombre and descriptionProducts=descripcion and Categories_idCategories=id_Categories)) then
            select idProducts into id from products where idProducts=id and nameProducts=nombre and descriptionProducts=descripcion and Categories_idCategories=id_Categories;
        end if;
	end if;
END