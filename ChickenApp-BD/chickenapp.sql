-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `chickenapp` DEFAULT CHARACTER SET utf8 ;
USE `chickenapp` ;

-- -----------------------------------------------------
-- Table `mydb`.`User`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`User` (
  `idUser` INT NOT NULL,
  `username` VARCHAR(45) NOT NULL,
  `password` VARCHAR(45) NOT NULL,
  `date` DATETIME NOT NULL,
  PRIMARY KEY (`idUser`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Employee`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`Employee` (
  `idEmployee` INT NOT NULL,
  `first_name` VARCHAR(45) NOT NULL,
  `last_name` VARCHAR(45) NOT NULL,
  `phone` VARCHAR(45) NOT NULL,
  `work_time` VARCHAR(45) NOT NULL,
  `dni` INT NOT NULL,
  `age` VARCHAR(45) NOT NULL,
  `adress` VARCHAR(100) NOT NULL,
  `date_creation` DATETIME NULL,
  `User_idUser` INT NOT NULL,
  PRIMARY KEY (`idEmployee`, `User_idUser`),
  INDEX `fk_Employee_User1_idx` (`User_idUser` ASC) VISIBLE,
  CONSTRAINT `fk_Employee_User1`
    FOREIGN KEY (`User_idUser`)
    REFERENCES `mydb`.`User` (`idUser`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Categories`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`Categories` (
  `idCategories` INT NOT NULL,
  `name` VARCHAR(45) NOT NULL,
  `description` VARCHAR(200) NOT NULL,
  `image` BLOB NULL,
  PRIMARY KEY (`idCategories`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Products`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`Products` (
  `idProducts` INT NOT NULL,
  `name` VARCHAR(45) NOT NULL,
  `description` VARCHAR(200) NOT NULL,
  `price` FLOAT NOT NULL,
  `stock` VARCHAR(45) NOT NULL,
  `size` VARCHAR(45) NOT NULL,
  `image` BLOB NULL,
  `Categories_idCategories` INT NOT NULL,
  PRIMARY KEY (`idProducts`, `Categories_idCategories`),
  INDEX `fk_Products_Categories1_idx` (`Categories_idCategories` ASC) VISIBLE,
  CONSTRAINT `fk_Products_Categories1`
    FOREIGN KEY (`Categories_idCategories`)
    REFERENCES `mydb`.`Categories` (`idCategories`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Customers`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`Customers` (
  `idCustomers` INT NOT NULL,
  `first_name` VARCHAR(45) NOT NULL,
  `last_name` VARCHAR(45) NOT NULL,
  `phone` VARCHAR(45) NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  `adress` VARCHAR(100) NOT NULL,
  `date_creation` DATETIME NULL,
  `last_update` TIMESTAMP NULL,
  `User_idUser` INT NOT NULL,
  PRIMARY KEY (`idCustomers`, `User_idUser`),
  INDEX `fk_Customers_User1_idx` (`User_idUser` ASC) VISIBLE,
  CONSTRAINT `fk_Customers_User1`
    FOREIGN KEY (`User_idUser`)
    REFERENCES `mydb`.`User` (`idUser`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`company`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`company` (
  `idCompany` INT NOT NULL,
  `information` VARCHAR(250) NOT NULL,
  `time_attention` VARCHAR(45) NULL,
  `fechaLocal` DATETIME NULL,
  `adress` VARCHAR(45) NULL,
  `phone` VARCHAR(45) NULL,
  `email` VARCHAR(45) NULL,
  PRIMARY KEY (`idCompany`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Departaments`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`Departaments` (
  `idDepartaments` INT NOT NULL,
  `name_dept` VARCHAR(45) NOT NULL,
  `description_dept` VARCHAR(200) NOT NULL,
  PRIMARY KEY (`idDepartaments`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Salaries`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`Salaries` (
  `idSalaries` INT NOT NULL,
  `salary` INT NOT NULL,
  `to_date` DATE NULL,
  `Employee_idEmployee` INT NOT NULL,
  PRIMARY KEY (`idSalaries`, `Employee_idEmployee`),
  INDEX `fk_Salaries_Employee1_idx` (`Employee_idEmployee` ASC) VISIBLE,
  CONSTRAINT `fk_Salaries_Employee1`
    FOREIGN KEY (`Employee_idEmployee`)
    REFERENCES `mydb`.`Employee` (`idEmployee`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Manager_Departament`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`Manager_Departament` (
  `Departaments_idDepartaments` INT NOT NULL,
  `Employee_idEmployee` INT NOT NULL,
  `from_date` DATE NULL,
  `to_date` DATE NULL,
  PRIMARY KEY (`Departaments_idDepartaments`, `Employee_idEmployee`),
  INDEX `fk_Departaments_has_Employee_Employee1_idx` (`Employee_idEmployee` ASC) VISIBLE,
  INDEX `fk_Departaments_has_Employee_Departaments1_idx` (`Departaments_idDepartaments` ASC) VISIBLE,
  CONSTRAINT `fk_Departaments_has_Employee_Departaments1`
    FOREIGN KEY (`Departaments_idDepartaments`)
    REFERENCES `mydb`.`Departaments` (`idDepartaments`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Departaments_has_Employee_Employee1`
    FOREIGN KEY (`Employee_idEmployee`)
    REFERENCES `mydb`.`Employee` (`idEmployee`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
