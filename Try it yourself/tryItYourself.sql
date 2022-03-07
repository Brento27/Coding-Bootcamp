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

