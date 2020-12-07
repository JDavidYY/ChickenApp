-- -----------------------------------------------------
-- Table `Chickenapp`.`Images`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Chickenapp`.`Images` (
  `idImages` INT NOT NULL,
  `typeImages` VARCHAR(45) NULL,
  `filenameImages` VARCHAR(45) NULL,
  `fileextensionImages` VARCHAR(45) NULL,
  `tmpImages` VARCHAR(45) NULL,
  PRIMARY KEY (`idImages`))
ENGINE = InnoDB;
