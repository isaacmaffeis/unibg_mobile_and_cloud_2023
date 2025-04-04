USE company;

-- Q1. Elenca tutti i dipendenti con nome e cognome.
SELECT employee.first_name, employee.last_name
FROM employee;

-- Q2. Trova il nome di tutti i rami (branch) dell'azienda
SELECT branch_name FROM branch;

-- Q3. Trova i dipendenti con salario superiore a 50.000.
SELECT first_name, last_name, salary
FROM employee
WHERE salary > 50000;

-- Q4. Mostra il nome e cognome dei dipendenti e il nome del ramo in cui lavorano.
SELECT e.first_name, e.last_name, b.branch_name
FROM employee AS e
LEFT JOIN branch AS b
ON e.emp_id = b.mgr_id;

-- Q5. Trova tutti i clienti e a quale ramo sono assegnati.
SELECT c.client_name, b.branch_name
FROM client AS c
LEFT JOIN branch AS b
ON c.branch_id = b.branch_id;

-- Q6. Trova i nomi dei fornitori (supplier_name) e i rami a cui forniscono.
SELECT bs.supplier_name, b.branch_name
FROM branch_supplier AS bs
JOIN branch AS b
ON bs.branch_id = b.branch_id;

-- Q7. Trova tutti i dipendenti che non hanno supervisore (super_id IS NULL).
SELECT first_name, last_name
FROM employee
WHERE super_id IS NULL;

-- Q8. Calcola il totale delle vendite effettuate da ogni dipendente.
SELECT e.last_name AS employee, SUM(w.total_sales) AS total_sales
FROM works_with AS w
JOIN employee AS e
ON e.emp_id = w.emp_id
GROUP BY w.emp_id;

-- Q9. Trova il dipendente con il massimo totale vendite.
SELECT e.first_name, e.last_name, SUM(ww.total_sales) AS total_sales
FROM works_with ww 
JOIN employee e ON ww.emp_id = e.emp_id
GROUP BY e.emp_id
ORDER BY total_sales DESC
LIMIT 1;

-- Q10. Trova i nomi dei dipendenti che gestiscono un ramo (mgr_id).
SELECT e.first_name, e.last_name
FROM employee e 
JOIN branch b ON e.emp_id = b.mgr_id;

-- Q11. Trova il nome di ogni dipendente insieme al nome del suo supervisore.
SELECT e.first_name AS employee_name, e.last_name AS employee_surname, ee.first_name AS supervisor_name, ee.last_name AS supervisor_surname
FROM employee e 
LEFT JOIN employee ee ON e.super_id = ee.emp_id;

-- Q12. Trova i nomi dei dipendenti che lavorano con più di 2 clienti diversi.
SELECT e.first_name, e.last_name
FROM employee e
WHERE e.emp_id IN (
	SELECT ww.emp_id
	FROM works_with ww
	GROUP BY ww.emp_id
	HAVING COUNT(client_id) > 2
);

SELECT e.first_name, e.last_name, COUNT(w.client_id) AS num_clients
FROM works_with w
JOIN employee e ON w.emp_id = e.emp_id
GROUP BY w.emp_id
HAVING COUNT(w.client_id) > 2;

-- Q13. Per ogni ramo, mostra il numero di dipendenti che vi lavorano.
SELECT b.branch_name, COUNT(e.emp_id) AS num_employee
FROM branch b
LEFT JOIN employee e ON b.branch_id = e.branch_id
GROUP BY b.branch_id;

-- Q14. Trova i rami che non hanno fornitori associati.
SELECT b.branch_name 
FROM branch b 
WHERE b.branch_id NOT IN (
	SELECT bs.branch_id
	FROM branch_supplier bs
	GROUP BY bs.branch_id
	HAVING COUNT(bs.supplier_name) > 0
);

SELECT b.branch_name
FROM branch b
LEFT JOIN branch_supplier bs ON b.branch_id = bs.branch_id
WHERE bs.supplier_name IS NULL;

-- Q15. Trova i dipendenti che non hanno mai lavorato con un cliente.
SELECT e.first_name, e.last_name
FROM employee e
LEFT JOIN works_with ww ON e.emp_id = ww.emp_id
WHERE ww.client_id IS NULL;

-- Q16. Trova il cliente con il più alto totale di vendite ricevute da tutti i dipendenti.
SELECT c.client_name, SUM(w.total_sales) AS total_sales
FROM client c
JOIN works_with w ON c.client_id = w.client_id
GROUP BY c.client_id
ORDER BY total_sales DESC
LIMIT 1;

-- Q17. Mostra il nome del ramo e il nome del suo manager, ma solo se il manager guadagna più di 70.000.
SELECT b.branch_name, e.first_name, e.last_name, e.salary
FROM branch b
JOIN employee e ON b.mgr_id = e.emp_id
WHERE e.salary > 70000;


