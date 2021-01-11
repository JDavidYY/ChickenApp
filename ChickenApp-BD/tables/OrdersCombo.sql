
-- -----------------------------------------------------
-- Table `Chickenapp`.`OrdersCombo`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Chickenapp`.`OrdersCombo` (
  `Orders_idOrders` INT NOT NULL,
  `Combo_idCombos` INT NOT NULL,
  `quantityOrdersCombo` INT NULL,
  `commentaryOrdersCombo` VARCHAR(145) NULL,
  `priceOrdersCombo` FLOAT NULL,
  PRIMARY KEY (`Orders_idOrders`, `Combo_idCombos`),
  CONSTRAINT `fk_Orders_has_Combo_Orders1`
    FOREIGN KEY (`Orders_idOrders`)
    REFERENCES `Chickenapp`.`Orders` (`idOrders`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Orders_has_Combo_Combo1`
    FOREIGN KEY (`Combo_idCombos`)
    REFERENCES `Chickenapp`.`Combo` (`idCombos`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;
