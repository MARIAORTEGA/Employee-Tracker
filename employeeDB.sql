DROP DATABASE IF EXISTS employeeDB;
CREATE DATABASE employeeDB;

USE employeeDB;

CREATE TABLE department(
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(30) NOT NULL,
  PRIMARY KEY (id)
);

INSERT INTO department (name)
VALUES ("Legal"), ("Finance"), ("Sales");

CREATE TABLE role(
  id INT NOT NULL AUTO_INCREMENT,
  title VARCHAR(30) NULL,
  salary DECIMAL(15,4) NULL,
  department_id INT NULL,
  PRIMARY KEY (id)
);

INSERT INTO role (title, salary, department_id)
VALUES ("Lawyer",190000.00,11), ("Accountant", 125000.00, 22), ("Salesperson", 1000000.00,33);


CREATE TABLE employee(
  id INT NOT NULL AUTO_INCREMENT,
  first_name VARCHAR(30) NULL,
  last_name VARCHAR(30) NULL,
  role_id INT NULL,
  manager_id INT NULL,
  PRIMARY KEY (id)
);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("John", "Smith", 100, 10);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("John", "Smith", 200, 20);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("John", "Smith", 300, 30);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("John", "Smith", 400, 40);

SELECT * FROM department;
SELECT * FROM role;
SELECT * FROM employee;

