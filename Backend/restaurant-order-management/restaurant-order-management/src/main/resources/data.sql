CREATE TABLE menu_items (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255),
    category VARCHAR(255),
    price DECIMAL(10, 2),
    available_quantity INT,
    sub_category VARCHAR(255),
    image_url VARCHAR(255),
    type VARCHAR(255)
);

CREATE TABLE orders (
    id INT PRIMARY KEY AUTO_INCREMENT,
    total_price DECIMAL(10, 2),
    status VARCHAR(50),
    order_date DATETIME
);

CREATE TABLE order_items (
    id INT PRIMARY KEY AUTO_INCREMENT,
    order_id INT,
    menu_item_id INT,
    quantity INT,
    price DECIMAL(10, 2),
    FOREIGN KEY (order_id) REFERENCES orders(id),
    FOREIGN KEY (menu_item_id) REFERENCES menu_items(id)
);
