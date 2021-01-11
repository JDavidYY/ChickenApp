-- -----------------------------------------------------
-- Table `Chickenapp`.`OrdersProducts`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Chickenapp`.`OrdersProducts` (
  `Orders_idOrders` INT NOT NULL,
  `Products_idProducts` INT NOT NULL,
  `quantityOrdersProducts` INT NULL,
  `commentaryOrdersProducts` VARCHAR(145) NULL,
  `priceOrdersProducts` FLOAT NULL,
  PRIMARY KEY (`Orders_idOrders`, `Products_idProducts`),
  CONSTRAINT `fk_Orders_has_Products_Orders1`
    FOREIGN KEY (`Orders_idOrders`)
    REFERENCES `Chickenapp`.`Orders` (`idOrders`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Orders_has_Products_Products1`
    FOREIGN KEY (`Products_idProducts`)
    REFERENCES `Chickenapp`.`Products` (`idProducts`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;
