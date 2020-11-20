

-- Schema Chickenapp
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `Chickenapp` DEFAULT CHARACTER SET utf8 ;
USE `Chickenapp` ;

-- -----------------------------------------------------
-- Table `Chickenapp`.`TypeEmployees`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Chickenapp`.`TypeEmployees` (
  `idTypeEmployees` INT NOT NULL,
  `nameTypeEmployees` VARCHAR(45) NOT NULL,
  `descriptionTypeEmployees` VARCHAR(200) NOT NULL,
  PRIMARY KEY (`idTypeEmployees`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Chickenapp`.`Users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Chickenapp`.`Users` (
  `idUsers` INT NOT NULL,
  `nameUsers` VARCHAR(45) NOT NULL,
  `passwordUsers` VARCHAR(45) NOT NULL,
  `typeUser` VARCHAR(45) NULL,
  PRIMARY KEY (`idUsers`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Chickenapp`.`Employees`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Chickenapp`.`Employees` (
  `idEmployees` INT NOT NULL,
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


-- -----------------------------------------------------
-- Table `Chickenapp`.`Categories`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Chickenapp`.`Categories` (
  `idCategories` INT NOT NULL,
  `nameCategories` VARCHAR(45) NOT NULL,
  `descriptionCategories` VARCHAR(200) NOT NULL,
  `imageCategories` VARCHAR(150) NULL,
  PRIMARY KEY (`idCategories`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Chickenapp`.`Products`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Chickenapp`.`Products` (
  `idProducts` INT NOT NULL,
  `nameProducts` VARCHAR(45) NOT NULL,
  `descriptionProducts` VARCHAR(200) NOT NULL,
  `priceProducts` VARCHAR(150) NOT NULL,
  `imageProducts` VARCHAR(150) NULL,
  `Categories_idCategories` INT NOT NULL,
  PRIMARY KEY (`idProducts`, `Categories_idCategories`),
  CONSTRAINT `fk_Products_Categories1`
    FOREIGN KEY (`Categories_idCategories`)
    REFERENCES `Chickenapp`.`Categories` (`idCategories`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Chickenapp`.`Customers`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Chickenapp`.`Customers` (
  `idCustomers` INT NOT NULL,
  `firstnameCustomers` VARCHAR(45) NOT NULL,
  `lastnameCustomers` VARCHAR(45) NOT NULL,
  `phoneCustomers` VARCHAR(45) NOT NULL,
  `emailCustomers` VARCHAR(45) NOT NULL,
  `adressCustomers` VARCHAR(100) NOT NULL,
  `Users_idUsers` INT NOT NULL,
  PRIMARY KEY (`idCustomers`, `Users_idUsers`),
  CONSTRAINT `fk_Customers_Users1`
    FOREIGN KEY (`Users_idUsers`)
    REFERENCES `Chickenapp`.`Users` (`idUsers`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Chickenapp`.`Company`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Chickenapp`.`Company` (
  `idCompanys` INT NOT NULL,
  `informationCompany` VARCHAR(250) NOT NULL,
  `timeattentionCompany` VARCHAR(45) NULL,
  `adressCompany` VARCHAR(45) NULL,
  `phoneCompany` VARCHAR(45) NULL,
  `emailCompany` VARCHAR(45) NULL,
  PRIMARY KEY (`idCompanys`))
ENGINE = InnoDB;
