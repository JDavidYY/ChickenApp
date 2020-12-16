-- -----------------------------------------------------
-- Table `Chickenapp`.`Combo`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Chickenapp`.`Combo` (
  `idCombos` INT NOT NULL,
  `nombreCombo` VARCHAR(45) NULL,
  `descriptionCombo` VARCHAR(100) NULL,
  `typeCombo` VARCHAR(45) NULL,
  PRIMARY KEY (`idCombos`))
ENGINE = InnoDB;

