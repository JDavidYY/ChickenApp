CREATE TABLE IF NOT EXISTS `Chickenapp`.`Products` (
  `idProducts` INT NOT NULL AUTO_INCREMENT,
  `nameProducts` VARCHAR(45) NOT NULL,
  `descriptionProducts` VARCHAR(200) NOT NULL,
  `priceProducts` VARCHAR(150) NOT NULL,
  `imageProducts` VARCHAR(150) NULL,
  `Categories_idCategories` INT NOT NULL,
  `estateProducts` INT NULL,
  PRIMARY KEY (`idProducts`, `Categories_idCategories`),
  CONSTRAINT `fk_Products_Categories1`
    FOREIGN KEY (`Categories_idCategories`)
    REFERENCES `Chickenapp`.`Categories` (`idCategories`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;
