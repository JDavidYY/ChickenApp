CREATE TABLE IF NOT EXISTS `Chickenapp`.`Employees` (
  `idEmployees` INT NOT NULL AUTO_INCREMENT,
  `estadoEmployees` INT NOT NULL,
  `firstnameEmployees` VARCHAR(45) NOT NULL,
  `lastnameEmployees` VARCHAR(45) NOT NULL,
  `phoneEmployees` VARCHAR(45) NOT NULL,
  `workshiftEmployees` VARCHAR(45) NOT NULL,
  `dniEmployees` VARCHAR(20) NOT NULL,
  `ageEmployees` VARCHAR(45) NOT NULL,
  `adressEmployees` VARCHAR(100) NOT NULL,
  `TypeEmployees_idDepartaments` INT NOT NULL,
  `Users_idUsers` INT NOT NULL,
  `estateEmployees` INT NULL,
  PRIMARY KEY (`idEmployees`, `TypeEmployees_idDepartaments`, `Users_idUsers`),
  CONSTRAINT `fk_Employees_TypeEmployees1`
    FOREIGN KEY (`TypeEmployees_idDepartaments`)
    REFERENCES `Chickenapp`.`TypeEmployees` (`idTypeEmployees`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Employees_Users1`
    FOREIGN KEY (`Users_idUsers`)
    REFERENCES `Chickenapp`.`Users` (`idUsers`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;