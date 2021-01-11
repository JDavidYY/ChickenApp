-- -----------------------------------------------------
-- Table `Chickenapp`.`Orders`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Chickenapp`.`Orders` (
  `idOrders` INT NOT NULL AUTO_INCREMENT,
  `dateOrders` VARCHAR(45) NULL,
  `typeOrders` VARCHAR(50) NULL,
  `estateOrders` VARCHAR(45) NULL,
  `feedbackOrders` VARCHAR(145) NULL,
  `idDeliveryboys` INT NULL,
  `priceOrders` FLOAT NULL,
  PRIMARY KEY (`idOrders`))
ENGINE = InnoDB;
