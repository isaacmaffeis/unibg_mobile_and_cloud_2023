CREATE DATABASE company;

USE company;

CREATE TABLE employee(
	emp_id INT PRIMARY KEY,
	first_name VARCHAR(20),
	last_name VARCHAR(20),
	birth_date DATE,
	sex CHAR,
	salary INT,
	super_id INT,
	branch_id INT
);

DESCRIBE employee;

CREATE TABLE branch(
	branch_id INT PRIMARY KEY AUTO_INCREMENT,
	branch_name VARCHAR(20),
	mgr_id INT,
	mgr_start_date DATE,
	FOREIGN KEY(mgr_id) REFERENCES employee(emp_id) ON DELETE SET NULL
);

DESCRIBE branch;

ALTER TABLE employee
ADD FOREIGN KEY(branch_id) 
REFERENCES branch(branch_id)
ON DELETE SET NULL;

ALTER TABLE employee
ADD FOREIGN KEY(super_id)
REFERENCES employee(emp_id)
ON DELETE SET NULL;

CREATE TABLE client(
	client_id INT PRIMARY KEY,
	client_name VARCHAR(20),
	branch_id INT,
	FOREIGN KEY(branch_id) REFERENCES branch(branch_id) ON DELETE SET NULL
);

DESCRIBE client;

CREATE TABLE works_with(
	emp_id INT,
	client_id INT,
	total_sales INT,
	PRIMARY KEY(emp_id, client_id),
	FOREIGN KEY(emp_id) REFERENCES employee(emp_id) ON DELETE CASCADE,
	FOREIGN KEY(client_id) REFERENCES client(client_id) ON DELETE CASCADE
);

DESCRIBE works_with;

ALTER TABLE works_with
MODIFY COLUMN total_sales INT;

CREATE TABLE branch_supplier(
	branch_id INT,
	supplier_name VARCHAR(20),
	supply_type VARCHAR(20),
	PRIMARY KEY(branch_id,supplier_name),
	FOREIGN KEY(branch_id) REFERENCES branch(branch_id) ON DELETE CASCADE
);

DESCRIBE branch_supplier;

