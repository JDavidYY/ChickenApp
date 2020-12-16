CREATE TABLE IF NOT EXISTS `Chickenapp`.`Customers` (
  `idCustomers` INT NOT NULL AUTO_INCREMENT,
  `firstnameCustomers` VARCHAR(45) NOT NULL,
  `lastnameCustomers` VARCHAR(45) NOT NULL,
  `phoneCustomers` VARCHAR(45) NOT NULL,
  `emailCustomers` VARCHAR(45) NOT NULL,
  `adressCustomers` VARCHAR(100) NOT NULL,
  `Users_idUsers` INT NOT NULL,
  `estateCustomers` INT NULL,
  PRIMARY KEY (`idCustomers`, `Users_idUsers`),
  CONSTRAINT `fk_Customers_Users1`
    FOREIGN KEY (`Users_idUsers`)
    REFERENCES `Chickenapp`.`Users` (`idUsers`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;
