-- -----------------------------------------------------
-- Table `Chickenapp`.`Products_Combo`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Chickenapp`.`Products_Combo` (
  `Products_idProducts` INT NOT NULL,
  `Combo_idCombos` INT NOT NULL,
  `discount` INT  NULL,
  PRIMARY KEY (`Products_idProducts`, `Combo_idCombos`),
  CONSTRAINT `fk_Products_has_Combo_Products1`
    FOREIGN KEY (`Products_idProducts`)
    REFERENCES `Chickenapp`.`Products` (`idProducts`),
  CONSTRAINT `fk_Products_has_Combo_Combo1`
    FOREIGN KEY (`Combo_idCombos`)
    REFERENCES `Chickenapp`.`Combo` (`idCombos`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;