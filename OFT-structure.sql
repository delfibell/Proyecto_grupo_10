CREATE DATABASE IF NOT EXISTS oftDB;

CREATE TABLE categories (
    id INT NOT NULL AUTO_INCREMENT,
    category VARCHAR(255),
    PRIMARY KEY (id)
);

CREATE TABLE productsTypes (
    id INT NOT NULL AUTO_INCREMENT,
    type VARCHAR(255),
    PRIMARY KEY (id)
);

CREATE TABLE productsDiscounts (
    id INT NOT NULL AUTO_INCREMENT,
    discount INT,
    status VARCHAR(255),
    PRIMARY KEY (id)
);

CREATE TABLE productsFragances (
    id INT NOT NULL AUTO_INCREMENT,
    fragance VARCHAR(255),
    PRIMARY KEY (id)
);

CREATE TABLE productsSizes (
    id INT NOT NULL AUTO_INCREMENT,
    size VARCHAR(255),
    PRIMARY KEY (id)
);

CREATE TABLE products (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(255),
    description VARCHAR(255),
    image VARCHAR(255),
    category VARCHAR(255),
    price INT,
    idType INT,
    idDiscount INT,
    idFragance INT,
    idSize INT,
    PRIMARY KEY (id),
    FOREIGN KEY (idType) REFERENCES productsTypes (id),
    FOREIGN KEY (idDiscount) REFERENCES productsDiscounts (id),
    FOREIGN KEY (idFragance) References productsFragances (id),
    FOREIGN KEY (idSize) References productsSizes (id)

);

CREATE TABLE users (
    id INT NOT NULL AUTO_INCREMENT,
    firstName VARCHAR(255),
    lastName VARCHAR(255),
    email VARCHAR(255),
    password VARCHAR(255),
    username VARCHAR(255),
    profilePic VARCHAR(255),
    idCategory INT,
    PRIMARY KEY (id),
    FOREIGN KEY (idCategory) REFERENCES categories (id)
);

CREATE TABLE carts (
    id INT NOT NULL AUTO_INCREMENT,
    idUser INT,
    date DATE,
    status VARCHAR(255),
    totalPrice INT,
    PRIMARY KEY (id),
    FOREIGN KEY (idUser) REFERENCES users (id)
);

CREATE TABLE carts_products (
	id INT NOT NULL AUTO_INCREMENT,
    idCart INT,
    idProduct INT,
    quantity INT,
    PRIMARY KEY (id),
    FOREIGN KEY (idCart) REFERENCES carts (id),
    FOREIGN KEY (idProduct) REFERENCES products (id)
);













