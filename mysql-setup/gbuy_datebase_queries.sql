CREATE TABLE gbuy.UserDetails (
UserID int IDENTITY(100,1) PRIMARY KEY,
FirstName varchar(255),
LastName varchar(255),
EmailID varchar(255) NOT NULL UNIQUE,
PhoneNumber varchar(11),
Address varchar(255),
City varchar(255),
PostalCode varchar(255),
Password varchar(255)
);



CREATE TABLE gbuy.ProductDetails (
ProductID varchar(255) PRIMARY KEY,
ProductName varchar(255),
Quantity varchar(255),
UnitPrice decimal(5,2),
Currency varchar(11)
);



INSERT INTO gbuy.ProductDetails (ProductID,ProductName,Quantity,UnitPrice,Currency)
VALUES ('GB001','Apple','1kg',5,'GBP'),
('GB002','Banana','1kg',4,'GBP'),
('GB003','Banana','1kg',0.4,'GBP'),
('GB004','Okra','1kg',3.45,'GBP'),
('GB005','Beetroot','1kg',4,'GBP'),
('GB006','Potato','1kg',1.87,'GBP'),
('GB007','Egg','12',2.1,'GBP'),
('GB008','Onions','1kg',0.85,'GBP'),
('GB009','Strawberries','1kg',5.63,'GBP'),
('GB010','Broccoli','1kg',1.31,'GBP'),
('GB011','Mushroom','1kg',3.01,'GBP'),
('GB012','Beans','1kg',8.75,'GBP'),
('GB013','Chicken','1kg',5.93,'GBP'),
('GB014','Lemon','1kg',3.21,'GBP'),
('GB015','Grape','1kg',4,'GBP'),
('GB016','Spinach','1kg',3.72,'GBP'),
('GB017','Garlic','100g',0.32,'GBP'),
('GB018','Kiwi','1kg',3.6,'GBP'),
('GB019','Cabbage','1kg',1.2,'GBP');



CREATE TABLE gbuy.OrderDetails (
Indexno int IDENTITY(100,1) PRIMARY KEY,
OrderID varchar(255),
UserID varchar(255),
ProductName varchar(255),
Quantity varchar(255),
UnitPrice decimal(5,2),
FinalPrice decimal(10,2)
);
