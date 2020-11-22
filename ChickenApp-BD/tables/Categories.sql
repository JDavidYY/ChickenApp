CREATE TABLE IF NOT EXISTS `Chickenapp`.`Categories` (
  `idCategories` INT NOT NULL AUTO_INCREMENT,
  `nameCategories` VARCHAR(45) NOT NULL,
  `descriptionCategories` VARCHAR(200) NOT NULL,
  `imageCategories` VARCHAR(150) NULL,
  `estateCategories` INT NULL,
  PRIMARY KEY (`idCategories`))
ENGINE = InnoDB;
