### Schema

CREATE DATABASE icecream_db;
USE icecream_db;

CREATE TABLE icecream
(
	id int NOT NULL AUTO_INCREMENT,
	name varchar(255) NOT NULL,
	eaten BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);
