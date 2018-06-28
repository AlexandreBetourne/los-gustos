DROP DATABASE IF EXISTS losgustos;
CREATE DATABASE losgustos;
USE losgustos;

DROP Table IF EXISTS user;
CREATE TABLE user (
	`id` INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
	`lastname` VARCHAR(128),
	`firstname` VARCHAR(128),
	`email` VARCHAR(128),
	`password` VARCHAR(128),
	`adress` VARCHAR(128),
	`city` VARCHAR(128),
	`postal` VARCHAR(128),
	`phone` VARCHAR(15)
);

DROP Table IF EXISTS tacos;
CREATE TABLE tacos (
	`id` INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
	`name` VARCHAR(128),
	`price` FLOAT(6),
  `img` VARCHAR(128),
	`ingredient` VARCHAR(128)
);

DROP Table IF EXISTS burritos;
CREATE TABLE burritos (
	`id` INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
	`name` VARCHAR(128),
	`price` FLOAT(6),
  `img` VARCHAR(128),
	`ingredient` VARCHAR(128)
);

DROP Table IF EXISTS quesadillas;
CREATE TABLE quesadillas (
	`id` INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
	`name` VARCHAR(128),
	`price` FLOAT(6),
  `img` VARCHAR(128),
	`ingredient` VARCHAR(128)
);

DROP Table IF EXISTS nachos;
CREATE TABLE nachos (
	`id` INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
	`name` VARCHAR(128),
	`price` FLOAT(6),
  `img` VARCHAR(128),
	`ingredient` VARCHAR(128)
);

DROP Table IF EXISTS veggie;
CREATE TABLE veggie (
	`id` INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
	`name` VARCHAR(128),
	`price` FLOAT(6),
  `img` VARCHAR(128),
	`ingredient` VARCHAR(128)
);

DROP Table IF EXISTS drinks;
CREATE TABLE drinks (
	`id` INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
	`name` VARCHAR(128),
	`price` FLOAT(6),
  `img` VARCHAR(128),
	`ingredient` VARCHAR(128)
);

INSERT INTO tacos (name, price, img, ingredient) VALUES
('Cheesy Taco', 1.49, 'taco', 'Crunch Galette, Viande Hachée, Cheddar, Salade'),
('Gordita Cheesy Taco', 2.49, 'taco2', 'Cheese Galette, Viande Hachée, Cheddar, Salade'),
('Ranch Taco', 2.99, 'taco3', 'Pain Complet, Viande Hachée, Tomates, Salade, 3 Fromages'),
('Doritos Taco', 1.99, 'taco4', 'Galette Doritos, Viande Hachée, Salade, Cheddar, Tomates'),
('Classic Taco', 2.49, 'taco5', 'Galette Maïs, Viande Hachée, Salade, Cheddar'),
('Beef Taco', 3.49, 'taco6', 'Galette Maïs, Steak Grillé, Salade, Tomates, Cheddar'),
('Chicken Taco', 3.49, 'taco7', 'Galette Maïs, Poulet, Cheddar, Salade'),
('Supreme Taco', 3.49, 'taco8', 'Galette Maïs et Doritoes, Viande Hachée, Haricots, Tomates, Cheddar, Salade');

INSERT INTO burritos (name, price, img, ingredient) VALUES
('Classic Burrito', 1.49, 'burrito', 'Galette Maïs, Haricots, Sauce Salsa, Cheddar, Oignons'),
('Super Burrito', 2.49, 'burrito2', 'Galette Maïs, Viande Hachée, Tomates, Oignons, Sauce Salsa, Cheddar, Haricots, Salade'),
('XXL Burrito', 2.99, 'burrito3', 'Galette Maïs, Viande Hachée, Guacamole, 3 Fromages, Riz Épicé, Haricots, Pico de Gallo'),
('Supreme Burrito', 1.99, 'burrito4', 'Galette Maïs, Poulet, Guacamole, Pico de Gallo, Salade, Cheddar'),
('Hot Burrito', 2.49, 'burrito5','Galette Maïs, Sauce Cheddar, Piments Rouge'),
('Chicken Burrito', 3.49, 'burrito6', 'Galette Maïs, Poulet, Sauce Chipolte, Sauce Blanche'),
('Potatoes Burrito', 3.49, 'burrito7', 'Galette Maïs, Potatoes, Sauce Cheddar, Sauce Blanche');

INSERT INTO quesadillas (name, price, img, ingredient) VALUES
('Cheesy Quesadillas', 1.49, 'quesadillas', 'Galette Maïs, 3 Fromages, Sauce Jalapeño'),
('Beef Quesadillas', 2.49, 'quesadillas2', 'Galette Maïs, Steak Grillé, Sauce Jalapeño'),
('Chicken Quesadillas', 2.99, 'quesadillas3', 'Galette Maïs, Poulet, 3 Fromages, Sauce Jalapeño');

INSERT INTO nachos (name, price, img, ingredient) VALUES
('XXL Classic Nachos', 1.49, 'nachos', 'Totopos, Viande Hachée, Sauce Cheddar, Haricots, Sauce Blanche, Tomates'),
('Royal Nachos', 2.49, 'nachos2', 'Classic Nachos, Boisson, Doritoes Tacos'),
('Classic Nachos', 2.99, 'nachos3', 'Totopos, Viande Hachée, Sauce Cheddar, Haricots, Sauce Blanche, Tomates'),
('Hot Nachos', 1.99, 'nachos4', 'Totopos, Haricots, Sauce Cheddar, Sauce Salsa');

INSERT INTO veggie (name, price, img, ingredient) VALUES
('Super Veggie', 1.49, 'veggie', 'Galette Maïs, Haricots, Guacamole, Salade, Pico de Gallo, Cheddar'),
('Veggie Salad', 2.49, 'veggie2', 'Haricots, Guacamole, Pico de Gallo, Sauce Blanche, Cheddar, Riz, Salade'),
('Veggie Burrito', 2.99, 'veggie3', 'Galette Maïs, Haricots, Riz, Salade, Sauce Blanche, Tomates, Guacamole, 3 Fromages'),
('Hot Tostada', 1.99, 'veggie4', 'Tostada, Haricots, Cheddar, Sauce Salsa, Sauce Chipolte, Salade, Tomates'),
('Bean Salad', 1.99, 'veggie5', 'Riz, Haricots');

INSERT INTO drinks (name, price, img, ingredient) VALUES
('Pepsi', 1.49, 'drink', 'Boisson de 50cl servie en fontaine'),
('Pepsi Max', 2.49, 'drink2', 'Boisson de 50cl servie en fontaine'),
('Jus Orange', 2.99, 'drink3', 'Boisson de 50cl servie en fontaine'),
('Ice Tea', 1.99, 'drink4', 'Boisson de 50cl servie en fontaine'),
('Eau', 0.00, 'drink5', 'Boisson de 50cl servie en fontaine');
