\c products_dev;

INSERT INTO products (name, price, description, category, stock_quantity, sku)
VALUES
('Lavender Bliss', 7.99, 'Experience the calming scent of lavender with this luxurious soap, perfect for unwinding after a long day.', 'Bath & Body', 150, 'LB-001'),
('Citrus Splash', 5.49, 'Invigorate your senses with our Citrus Splash soap, infused with essential oils for a refreshing cleanse.', 'Bath & Body', 200, 'CS-002'),
('Minty Fresh', 6.99, 'Feel rejuvenated with the cooling sensation of mint, leaving your skin feeling fresh and tingly.', 'Bath & Body', 120, 'MF-003'),
('Honey & Oatmeal', 8.49, 'Sooth and moisturize your skin with the natural goodness of honey and oatmeal, ideal for sensitive skin.', 'Bath & Body', 100, 'HO-004'),
('Charcoal Detox', 9.99, 'Deep cleanse and detoxify your skin with our activated charcoal soap, great for oily skin.', 'Bath & Body', 80, 'CD-005'),
('Rose Garden', 7.49, 'Indulge in the romantic aroma of roses, leaving your skin soft and fragrant all day.', 'Bath & Body', 130, 'RG-006'),
('Aloe Vera', 6.49, 'Hydrate and soothe your skin with the natural healing properties of aloe vera.', 'Bath & Body', 170, 'AV-007'),
('Coconut Dream', 5.99, 'Transport yourself to a tropical paradise with our coconut-scented soap, rich in moisturizing oils.', 'Bath & Body', 140, 'CD-008'),
('Tea Tree Magic', 8.99, 'Fight acne and bacteria with the powerful antiseptic properties of tea tree oil.', 'Bath & Body', 110, 'TTM-009');


INSERT INTO reviews (product_id, reviewer, title, content, rating)
VALUES
('1', 'Evan', 'My Favorite Soap', 'This soap leaves my skin feeling amazing!', 5),
('2', 'Evan', 'Great Soap', 'This soap has a wonderful scent and lathers well.', 4),
('3', 'Evan', 'Not My Favorite', 'This soap dried out my skin too much.', 2),
('2', 'Juliana', 'Love This Soap', 'The best soap I have ever used, smells great and lasts long.', 5),
('2', 'David', 'Decent Soap', 'Good for everyday use, but not special.', 3),
('2', 'Mr. Mingo', 'Very Useful', 'Helped with my dry skin issues, great product.', 4),
('2', 'Alison', 'Fantastic Soap!', 'Left my skin cleaner than I ever imagined possible!', 5),
('3', 'Hannah', 'Just Okay', 'Not bad, but I have used better soaps.', 3),
('3', 'Gabi', 'Nice Soap', 'Good soap, but a bit expensive for what it is.', 4);


INSERT INTO user_test (user_name, email,password)
VALUES

('Joshua M', 'JMelson@yahoo.com','MkUltra234',)