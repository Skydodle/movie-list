drop database if exists movies;
CREATE DATABASE movies;
USE movies;

CREATE TABLE movieList (
  /* Describe your table here.*/
  id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(200) NOT NULL,
  watched BOOLEAN
);


/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/