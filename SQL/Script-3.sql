-- Find all employees
SELECT * FROM employee;

-- Find all clients
SELECT * FROM client;

-- Find all employees ordered by salary
SELECT * FROM employee
ORDER BY salary DESC;

-- Find all employees ordered by sex then name
SELECT * FROM employee 
ORDER BY sex, first_name, last_name;

-- Find the first 5 employees in the table
SELECT * FROM employee 
LIMIT 5;

-- Find the first and last names of all employees
SELECT employee.first_name, employee.last_name
FROM employee;

-- Find the forename and surenames of all employees
SELECT first_name AS forename, last_name AS surname
FROM employee;

-- Find all the different genders
SELECT DISTINCT sex
FROM employee;

-- Find the number of employee
SELECT COUNT(*) FROM employee;

-- Find the number of supervisors
SELECT COUNT(DISTINCT super_id) FROM employee;

-- Find the number of female employee born after 1970
SELECT COUNT(emp_id) FROM employee 
WHERE sex = 'F' AND birth_date >= 1970-01-01;

-- Find the average of all employee's salary
SELECT AVG(salary) FROM employee;

-- Find the sum of all male employee's salary
SELECT SUM(salary) FROM employee
WHERE sex = 'M';

-- Find out how many males and female there are
SELECT COUNT(sex), sex 
FROM employee
GROUP BY sex;

-- Find the total sales of each salesman
SELECT works_with.emp_id, SUM(works_with.total_sales) AS total_sales
FROM works_with
GROUP BY emp_id;

-- % = any # characters, _ = one character

-- Find any client's who are an LLC
SELECT * FROM client
WHERE client_name LIKE '%LLC';

-- Find any branch suppliers who are in the label business
SELECT * FROM branch_supplier 
WHERE supplier_name LIKE '%Label%'

-- Find any employee born in October
SELECT * FROM employee
WHERE birth_date LIKE '____-10%';

-- Find any clients who are schools
SELECT * FROM client 
WHERE client_name LIKE '%school%';

-- Find a list of employee and branch names
SELECT first_name AS Company_names
FROM employee 
UNION 
SELECT branch_name
FROM branch;

-- Find a list of all clients & branch suppliers' name
SELECT client_name AS Names, client.branch_id
FROM client 
UNION
SELECT supplier_name, branch_supplier.branch_id
FROM branch_supplier 

-- Find a list of all money spent or earned by the company
SELECT salary AS Money
FROM employee
UNION
SELECT total_sales
FROM works_with;

INSERT INTO branch VALUES(4,'Buffalo', NULL, NULL);

-- Find all branches and the name of their managers 
-- INNER JOIN (include the common elements)
SELECT employee.emp_id, employee.first_name, branch.branch_name
FROM employee 
JOIN branch 
ON employee.emp_id = branch.mgr_id;

-- LEFT JOIN (include all elements from the left table)
SELECT employee.emp_id, employee.first_name, branch.branch_name
FROM employee 
LEFT JOIN branch 
ON employee.emp_id = branch.mgr_id;

-- RIGHT JOIN (include all elements from the right table)
SELECT employee.emp_id, employee.first_name, branch.branch_name
FROM employee 
RIGHT JOIN branch 
ON employee.emp_id = branch.mgr_id;

-- Find names of all employees who have sold over 30,000 to a single client
-- Nested queries
SELECT employee.first_name, employee.last_name
FROM employee 
WHERE employee.emp_id IN (
	SELECT works_with.emp_id 
	FROM works_with
	WHERE works_with.total_sales > 30000
);

-- Find all clients who are handled by the branch that Michael Scott manages, assume you know Michael's ID
SELECT client.client_name
FROM client
WHERE branch_id = (
	SELECT branch.branch_id
	FROM branch
	WHERE branch.mgr_id = 102
	LIMIT 1
);
