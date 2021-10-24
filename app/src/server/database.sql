drop database if exists petfriendly;

create database petfriendly;

\c petfriendly

drop table if exists customer;
create table if not exists customer(
	user_id serial primary key,
	first_name varchar(20),
	last_name varchar(30),
	dob date,

	street varchar(30),
	city varchar(20),
	state char(2),
	zip char(5)
);

insert into customer values (DEFAULT, 'John', 'Baldera', '1996-07-04', '81 Georgia Tech Station', 'Atlanta', 'GA', '30332');

drop table if exists pet;
create table if not exists pet(
	pet_id serial primary key,
	user_id int not null references customer on delete cascade,
	name varchar(10),
	type varchar(10),
	size varchar(10)
);

insert into pet values (DEFAULT, (select user_id from customer where user_id=1), 'dogname', 'dog', 'small');
insert into pet values (DEFAULT, (select user_id from customer where user_id=1), 'secondDog', 'dog', 'medium');

drop table if exists hotel;
create table if not exists hotel(
	hotel_id serial primary key,
	name varchar(40),

	street varchar(30),
	city varchar(20),
	state char(2),
	zip char(5)
);