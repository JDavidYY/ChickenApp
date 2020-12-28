CREATE TABLE IF NOT EXISTS `Chickenapp`.`Company` (
  `idCompanys` INT NOT NULL AUTO_INCREMENT,
  `informationCompany` VARCHAR(250) NOT NULL,
  `timeattentionCompany` VARCHAR(45) NULL,
  `adressCompany` VARCHAR(45) NULL,
  `phoneCompany` VARCHAR(45) NULL,
  `emailCompany` VARCHAR(45) NULL,
  `estateCompany` VARCHAR(45) NULL,
  PRIMARY KEY (`idCompanys`))
ENGINE = InnoDB;
