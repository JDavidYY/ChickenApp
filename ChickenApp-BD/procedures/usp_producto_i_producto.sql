CREATE DEFINER=`root`@`localhost` PROCEDURE `usp_producto_i_producto`(out id int,in  nombre varchar(45),in	descripcion varchar(200),in  precio varchar(150),in  imagen varchar(150),in  id_Categories int)
BEGIN
	if (SELECT EXISTS(select * from products where nameProducts=nombre))=false then
		insert into products (nameProducts,descriptionProducts,priceProducts,imageProducts,Categories_idCategories,estateProducts) values (nombre,descripcion,precio,imagen,id_Categories,1);
		if (SELECT EXISTS(select * from products where nameProducts=nombre and descriptionProducts=descripcion and estateProducts=1 and Categories_idCategories=id_Categories)) then
            select idProducts into id from products where nameProducts=nombre and descriptionProducts=descripcion and estateProducts=1 and Categories_idCategories=id_Categories;
        end if;
	end if;
END