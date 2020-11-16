-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema Chickenapp
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema Chickenapp
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `Chickenapp` DEFAULT CHARACTER SET utf8 ;
USE `Chickenapp` ;

-- -----------------------------------------------------
-- Table `Chickenapp`.`Users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Chickenapp`.`Users` (
  `idUsers` INT NOT NULL,
  `nameUsers` VARCHAR(45) NOT NULL,
  `passwordUsers` VARCHAR(45) NOT NULL,
  `dateUsers` DATETIME NOT NULL,
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
  `worktimeEmployees` VARCHAR(45) NOT NULL,
  `dniEmployees` INT NOT NULL,
  `ageEmployees` VARCHAR(45) NOT NULL,
  `adressEmployees` VARCHAR(100) NOT NULL,
  `datecreationEmployees` DATETIME NULL,
  `Users_idUsers` INT NOT NULL,
  PRIMARY KEY (`idEmployees`, `Users_idUsers`),
  CONSTRAINT `fk_Employee_User1`
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
  `imageCategories` BLOB NULL,
  PRIMARY KEY (`idCategories`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Chickenapp`.`Products`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Chickenapp`.`Products` (
  `idProducts` INT NOT NULL,
  `nameProducts` VARCHAR(45) NOT NULL,
  `descriptionProducts` VARCHAR(200) NOT NULL,
  `priceProducts` FLOAT NOT NULL,
  `stockProducts` VARCHAR(45) NOT NULL,
  `sizeProducts` VARCHAR(45) NOT NULL,
  `imageProducts` BLOB NULL,
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
  `datecreationCustomers` DATETIME NULL,
  `lastupdateCustomers` TIMESTAMP NULL,
  `Users_idUsers` INT NOT NULL,
  PRIMARY KEY (`idCustomers`, `Users_idUsers`),
  CONSTRAINT `fk_Customers_User1`
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


-- -----------------------------------------------------
-- Table `Chickenapp`.`Departaments`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Chickenapp`.`Departaments` (
  `idDepartaments` INT NOT NULL,
  `nameDepartaments` VARCHAR(45) NOT NULL,
  `descriptionDepartaments` VARCHAR(200) NOT NULL,
  PRIMARY KEY (`idDepartaments`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Chickenapp`.`Salaries`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Chickenapp`.`Salaries` (
  `idSalaries` INT NOT NULL,
  `salarySalaries` INT NOT NULL,
  `todateSalaries` DATE NULL,
  `Employees_idEmployees` INT NOT NULL,
  PRIMARY KEY (`idSalaries`, `Employees_idEmployees`),
  CONSTRAINT `fk_Salaries_Employee1`
    FOREIGN KEY (`Employees_idEmployees`)
    REFERENCES `Chickenapp`.`Employees` (`idEmployees`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Chickenapp`.`Manager_Departament`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Chickenapp`.`Manager_Departament` (
  `Departaments_idDepartaments` INT NOT NULL,
  `Employees_idEmployees` INT NOT NULL,
  `fromdateManager_Departament` DATE NULL,
  `todateManager_Departament` DATE NULL,
  PRIMARY KEY (`Departaments_idDepartaments`, `Employees_idEmployees`),
  CONSTRAINT `fk_Departaments_has_Employee_Departaments1`
    FOREIGN KEY (`Departaments_idDepartaments`)
    REFERENCES `Chickenapp`.`Departaments` (`idDepartaments`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Departaments_has_Employee_Employee1`
    FOREIGN KEY (`Employees_idEmployees`)
    REFERENCES `Chickenapp`.`Employees` (`idEmployees`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
