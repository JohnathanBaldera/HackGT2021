drop database if exists petfriendly;

create database petfriendly;

\c petfriendly

create table if not exists test(
	id serial primary key,
	description varchar(255)
);