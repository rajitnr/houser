drop table house;

CREATE TABLE house (
  "id" SERIAL PRIMARY KEY NOT NULL,
  "property_name" varchar(100) NOT NULL,
  "address" varchar (500) NOT NULL,
  "city" varchar (50) NOT NULL,
  "state" varchar (2) NOT NULL,
  "zip_code" integer  NOT NULL,
  "img" varchar(500) NOT NULL,
  "monthlyMortgage" numeric(14,3) NOT NULL,
  "desiredRent" numeric(14,3) NOT NULL
);

-- alter table house 
-- add column  monthlyMortgage numeric (14,3) NOT NULL  default 0,
-- add column  desiredRent numeric (14,3) NOT NULL  default 0;