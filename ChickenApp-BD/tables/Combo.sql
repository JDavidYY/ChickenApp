-- -----------------------------------------------------
-- Table `Chickenapp`.`Combo`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Chickenapp`.`Combo` (
  `idCombos` INT NOT NULL AUTO_INCREMENT,
  `nombreCombo` VARCHAR(45) NULL,
  `descriptionCombo` VARCHAR(100) NULL,
  `estateCombo` VARCHAR(45) NULL,
  PRIMARY KEY (`idCombos`))
ENGINE = InnoDB;
