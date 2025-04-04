DROP TABLE student;

CREATE TABLE student (
	student_id INT AUTO_INCREMENT,
	name VARCHAR(20) NOT NULL,
	major VARCHAR(20) UNIQUE,
	PRIMARY KEY(student_id)
);

DESCRIBE student;

ALTER TABLE student ADD gpa DECIMAL(3,2);

ALTER TABLE student DROP COLUMN gpa;

INSERT INTO student(name, major) VALUES('Jack', 'Biology');
INSERT INTO student(name, major) VALUES('Kate', 'Sociology');
INSERT INTO student(name, major) VALUES('Claire', 'Chemistry');
INSERT INTO student VALUES(4, 'Jack', 'Biology');
INSERT INTO student VALUES(5, 'Mike', 'Computer Science');

INSERT INTO student(student_id, name) VALUES(4, 'Claire');

UPDATE student
SET major = 'Bio'
WHERE major = 'Biology';

SELECT * FROM student;