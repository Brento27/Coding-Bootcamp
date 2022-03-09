create table animals(
animal_type varchar(25),
animal_quantity numeric,
cage_number numeric);

create table animal_specifics(
animal_name varchar(25),
animal_type varchar(25),
age numeric,
cage_number numeric,
gender varchar(6),
mated varchar(3)
);

--I think the collumns is a good specification for each table

insert into animals (animal_type, animal_quantity, cage_number)
values 	('tiger', 2, 1),
		('lion', 5, 2),
		('giraffe', 3, 3);

insert into animal_specifics (animal_name, animal_type, age, cage_number, gender, mated)
values	('Drake', 'tiger', 4, 1, 'Male', 'Yes'),
		('Leo', 'lion', 2, 2, 'Male', 'No'),
		('Pual', 'giraffe', 7, 3, 'Male', 'Yes'),
		('Berta', 'giraffe', 3, 3, 'Female', 'Yes');
		
--without the comma it gives you a syntax error near the problem

CREATE TABLE teachers (
 id bigserial,
 first_name varchar(25),
 last_name varchar(50),
 school varchar(50),
 hire_date date,
 salary numeric
 );

INSERT INTO teachers (first_name, last_name, school, hire_date, salary)
 VALUES ('Janet', 'Smith', 'F.D. Roosevelt HS', '2011-10-30', 36200),
		('Lee', 'Reynolds', 'F.D. Roosevelt HS', '1993-05-22', 65000),
		('Samuel', 'Cole', 'Myers Middle School', '2005-08-01', 43500),
		('Samantha', 'Bush', 'Myers Middle School', '2011-10-30', 36200),
		('Betty', 'Diaz', 'Myers Middle School', '2005-08-30', 43500),
		('Kathleen', 'Roush', 'F.D. Roosevelt HS', '2010-10-22', 38500);
		
select school, first_name, last_name
from teachers
order by last_name Asc

select first_name, last_name, salary
from teachers
where first_name ilike 's%' and salary > 40000

select first_name, last_name, hire_date, salary
from teachers
where hire_date > '2010-01-01' 
order by salary desc

------------------------------------------------------------------------------

CREATE TABLE char_data_types (
	varchar_column varchar(10),
	char_column char(10),
	text_column text
);

INSERT INTO char_data_types
VALUES	('abc', 'abc', 'abc'),
		('defghi', 'defghi', 'defghi');
		
COPY char_data_types TO 'C:\Users\Brent\OneDrive\Programming\SQL-Module\Try it yourself\typetest.txt' WITH (FORMAT CSV, HEADER, DELIMITER '|');

CREATE TABLE number_data_types (
numeric_column numeric(20,5),
real_column real,
double_column double precision
);

INSERT INTO number_data_types
VALUES	(.7, .7, .7),
		(2.13579, 2.13579, 2.13579),
		(2.1357987654, 2.1357987654, 2.1357987654);
		
SELECT * FROM number_data_types;

SELECT
numeric_column * 10000000 AS "Fixed",
real_column * 10000000 AS "Float"
FROM number_data_types
WHERE numeric_column = .7;

CREATE TABLE date_time_types (
timestamp_column timestamp with time zone,
interval_column interval
);

INSERT INTO date_time_types
VALUES	('2018-12-31 01:00 EST','2 days'),
		('2018-12-31 01:00 -8','1 month'),
		('2018-12-31 01:00 Australia/Melbourne','1 century'),
		(now(),'1 week');
		
SELECT * FROM date_time_types;

SELECT
	timestamp_column,
	interval_column,
	timestamp_column - interval_column AS new_date
FROM date_time_types;

SELECT timestamp_column, CAST(timestamp_column AS varchar(10))
FROM date_time_types;

SELECT numeric_column,
CAST(numeric_column AS integer),
CAST(numeric_column AS varchar(6))
FROM number_data_types;

--SELECT CAST(char_column AS integer) FROM char_data_types;

SELECT timestamp_column::varchar(10)
FROM date_time_types;

--Chapter 3 try it yourself
--a numeric(3, 3) would be appropiate
--varchar(25) and varchar(50) are appropiate data types for names
--It is a good idea for finding specifc entries easier

--Chapter 4 try it yourself

--copy imaginary 
--from 'C:\Users\Brent\OneDrive\Programming\SQL-Module\Try it yourself\imaginary.txt'
--with (format csv, header, delimeter '|');

--Yeah I think they will work because the precision is set to 3 and there is only 3 decimal places



--Chapter 5 try it yourself



