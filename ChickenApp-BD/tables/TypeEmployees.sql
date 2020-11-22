CREATE TABLE IF NOT EXISTS `Chickenapp`.`TypeEmployees` (
  `idTypeEmployees` INT NOT NULL AUTO_INCREMENT,
  `nameTypeEmployees` VARCHAR(45) NOT NULL,
  `descriptionTypeEmployees` VARCHAR(200) NOT NULL,
  `estateTypeEmployees` VARCHAR(45) NULL,
  PRIMARY KEY (`idTypeEmployees`))
ENGINE = InnoDB;