  first_name VARCHAR(30) NULL,
  last_name VARCHAR(30) NULL,
  role_id INT NULL,
  manager_id INT NULL,
  PRIMARY KEY (id)
);

INSERT INTO department (name)
VALUES ("Legal"), ("Finance"), ("Sales");

INSERT INTO roles (title)
VALUES ("Lawyer"), ("Accountant"), ("Salesperson");
INSERT INTO roles (salary)
VALUES (190000), (125000), (100000);
INSERT INTO roles (department_id )
VALUES (001),(002),(003);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES ("John", "Lennon", 100, 10);
INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES ("Paul", "McCartney", 200, 20);
INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES ("Ringo", "Starr", 300, 30);
INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES ("George", "Harrison", 400, 40);


SELECT * FROM department;
SELECT * FROM role;
SELECT * FROM employee;


