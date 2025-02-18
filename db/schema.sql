DROP DATABASE IF EXISTS products_dev;
CREATE DATABASE products_dev;

\c products_dev;

CREATE TABLE products (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    price DECIMAL,
    description TEXT,
    category TEXT,
    stock_quantity INT,
    sku VARCHAR(10)
);
 

DROP TABLE IF EXISTS reviews;

CREATE TABLE reviews (
 id SERIAL PRIMARY KEY,
 reviewer TEXT,
 title TEXT,
 content TEXT,
 rating NUMERIC,
 CHECK (rating >= 0 AND rating <= 5),
 product_id INTEGER REFERENCES products (id)
 ON DELETE CASCADE
);

DROP TABLE IF EXISTS user_test;

CREATE TABLE user_test (
 id SERIAL PRIMARY KEY,
 user_name VARCHAR(255) NOT NULL,
 email VARCHAR(255) NOT NULL,
 password VARCHAR(255) NOT NULL,
 product_id INTEGER REFERENCES products (id)
 ON DELETE CASCADE
);