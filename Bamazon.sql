CREATE DATABASE bamazon;
USE bamazon;

CREATE TABLE products(
	item_id INT NOT NULL,
    product_name VARCHAR(250) NOT NULL,
    department_name VARCHAR(250) NOT NULL,
    price DECIMAL (10, 2) NOT NULL,
    stock_quantity INT NOT NULL
);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (001, "Clorox Disinfecting Wipes", "Household Products", 4.00, 50);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (002, "Chocolate Bar", "Food", 1.50, 20);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (003, "50' Television", "Electronics", 1500, 10);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (004, "Camera", "Electronics", 500.50, 10);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (005, "Paper Towels", "Household Products", 17.99, 50);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (006, "Diapers", "Baby Products", 25.89, 30);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (007, "Dragon Fruit", "Food", 7, 10);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (008, "Infant Formula", "Baby Products", 22.50, 60);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (009, "Picture Frame", "Home Decor", 35.70, 50);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (010, "Lamp", "Home Decor", 88.50, 5);

SELECT * FROM products;

