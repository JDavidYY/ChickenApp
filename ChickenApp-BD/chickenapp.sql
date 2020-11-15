
CREATE SCHEMA IF NOT EXISTS `chickenapp` DEFAULT CHARACTER SET utf8 ;
USE `chickenapp` ;

-- -----------------------------------------------------
-- Table `chickenapp`.`User`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `chickenapp`.`User` (
  `idUser` INT NOT NULL,
  `username` VARCHAR(45) NOT NULL,
  `password` VARCHAR(45) NOT NULL,
  `date` DATETIME NOT NULL,
  PRIMARY KEY (`idUser`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `chickenapp`.`Employee`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `chickenapp`.`Employee` (
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
    REFERENCES `chickenapp`.`User` (`idUser`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `chickenapp`.`Categories`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `chickenapp`.`Categories` (
  `idCategories` INT NOT NULL,
  `name` VARCHAR(45) NOT NULL,
  `description` VARCHAR(200) NOT NULL,
  `image` BLOB NULL,
  PRIMARY KEY (`idCategories`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `chickenapp`.`Products`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `chickenapp`.`Products` (
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
    REFERENCES `chickenapp`.`Categories` (`idCategories`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `chickenapp`.`Customers`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `chickenapp`.`Customers` (
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
    REFERENCES `chickenapp`.`User` (`idUser`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `chickenapp`.`company`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `chickenapp`.`company` (
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
-- Table `chickenapp`.`Departaments`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `chickenapp`.`Departaments` (
  `idDepartaments` INT NOT NULL,
  `name_dept` VARCHAR(45) NOT NULL,
  `description_dept` VARCHAR(200) NOT NULL,
  PRIMARY KEY (`idDepartaments`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `chickenapp`.`Salaries`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `chickenapp`.`Salaries` (
  `idSalaries` INT NOT NULL,
  `salary` INT NOT NULL,
  `to_date` DATE NULL,
  `Employee_idEmployee` INT NOT NULL,
  PRIMARY KEY (`idSalaries`, `Employee_idEmployee`),
  INDEX `fk_Salaries_Employee1_idx` (`Employee_idEmployee` ASC) VISIBLE,
  CONSTRAINT `fk_Salaries_Employee1`
    FOREIGN KEY (`Employee_idEmployee`)
    REFERENCES `chickenapp`.`Employee` (`idEmployee`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `chickenapp`.`Manager_Departament`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `chickenapp`.`Manager_Departament` (
  `Departaments_idDepartaments` INT NOT NULL,
  `Employee_idEmployee` INT NOT NULL,
  `from_date` DATE NULL,
  `to_date` DATE NULL,
  PRIMARY KEY (`Departaments_idDepartaments`, `Employee_idEmployee`),
  INDEX `fk_Departaments_has_Employee_Employee1_idx` (`Employee_idEmployee` ASC) VISIBLE,
  INDEX `fk_Departaments_has_Employee_Departaments1_idx` (`Departaments_idDepartaments` ASC) VISIBLE,
  CONSTRAINT `fk_Departaments_has_Employee_Departaments1`
    FOREIGN KEY (`Departaments_idDepartaments`)
    REFERENCES `chickenapp`.`Departaments` (`idDepartaments`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Departaments_has_Employee_Employee1`
    FOREIGN KEY (`Employee_idEmployee`)
    REFERENCES `chickenapp`.`Employee` (`idEmployee`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;