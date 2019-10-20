DROP DATABASE IF EXISTS restaurants;

CREATE DATABASE restaurants;

USE restaurants;

CREATE TABLE restaurants (
  id serial PRIMARY KEY,
  name varchar(50) NOT NULL,
  categories varchar(50) NOT NULL,
  price varchar(10) NOT NULL,
  location varchar(150) NOT NULL,
  url text NOT NULL,
  phone varchar(25) NOT NULL,
  image_url text
);