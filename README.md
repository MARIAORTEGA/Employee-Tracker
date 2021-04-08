# EMPLOYEE-TRACKER 🌸
(Content Management Tracker using node, inquirer, and MySQL)

------database schema with 3 tables------

department:
id - INT PRIMARY KEY
name - VARCHAR(30) to hold department name

role:
id - INT PRIMARY KEY
title -  VARCHAR(30) to hold role title
salary -  DECIMAL to hold role salary
department_id -  INT to hold reference to department role belongs to

employee:
id - INT PRIMARY KEY
first_name - VARCHAR(30) to hold employee first name
last_name - VARCHAR(30) to hold employee last name
role_id - INT to hold reference to role employee has
manager_id - INT to hold reference to another employee that manages the employee being Created. This field may be null if the employee has no manager


------build  command-line application that allows the user to-----

* Add departments, roles, employees

***** View departments, roles, employees*****


* Update employee roles

https://user-images.githubusercontent.com/71056915/114062083-1cf6fe80-9865-11eb-9ba8-738ad29be1e8.mp4




![employee-tracker](https://user-images.githubusercontent.com/71056915/114066351-a27cad80-9869-11eb-9311-c46183de86f2.gif)
