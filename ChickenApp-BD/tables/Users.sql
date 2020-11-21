CREATE TABLE IF NOT EXISTS `Chickenapp`.`Users` (
  `idUsers` INT NOT NULL AUTO_INCREMENT,
  `nameUsers` VARCHAR(45) NOT NULL,
  `passwordUsers` VARCHAR(45) NOT NULL,
  `typeUser` VARCHAR(45) NULL,
  `estateUser` INT NULL,
  PRIMARY KEY (`idUsers`))
ENGINE = InnoDB;
