create DATABASE  GameStore;

CREATE TABLE CategoryDepartment(
   CategoryID int identity(1,1) PRIMARY KEY,
   CategoryName varchar(50) 
)

CREATE TABLE GameDepartment(
    GameID int identity(10,1)  PRIMARY KEY,
	GameName varchar(50) ,
	CategoryID int,
    Price float ,
	Image VARCHAR(300),
    StockQuantity INT ,
	FOREIGN KEY (CategoryID) REFERENCES CategoryDepartment(CategoryID)

);
drop table GameDepartment
CREATE TABLE CustomerDepartment(
	 CustID int identity(1258,958)  PRIMARY KEY,
	 CustName varchar(50) ,
	 Custpass varchar(10) ,
	 CustCreditDetails varchar(100) 
)


CREATE TABLE ShoppingDepartment(
    ShoppingID INT identity(112,11) PRIMARY KEY,
    CustomerID INT,
    ShppingDate DATETIME ,
    TotalAmount DECIMAL(10, 2) ,
    FOREIGN KEY (CustomerID) REFERENCES CustomerDepartment(CustID)
)


CREATE TABLE PurchaseDetailsDepartment(
    ShoppingDetailID INT identity(456322,1153) PRIMARY KEY,
    ShoppingID INT,
    GameID INT,
    Quantity INT ,
    FOREIGN KEY (ShoppingID) REFERENCES ShoppingDepartment(ShoppingID),
    FOREIGN KEY (GameID) REFERENCES GameDepartment(GameID)
)
select *
from CustomerDepartment

select *
from 

DELETE FROM PurchaseDetailsDepartment
WHERE CustID>10800