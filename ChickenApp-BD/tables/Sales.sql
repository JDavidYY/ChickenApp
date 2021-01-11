
-- -----------------------------------------------------
-- Table `Chickenapp`.`Sales`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Chickenapp`.`Sale` (
  `idSales` INT NOT NULL AUTO_INCREMENT,
  `totalSales` FLOAT NULL,
  `igvSales` FLOAT NULL,
  `dateSales` VARCHAR(45) NULL,
  `Order_idOrder` INT NOT NULL,
  PRIMARY KEY (`idSale`, `Order_idOrder`),
  CONSTRAINT `fk_Sale_Order1`
    FOREIGN KEY (`Order_idOrder`)
    REFERENCES `Chickenapp`.`Orders` (`idOrders`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;
