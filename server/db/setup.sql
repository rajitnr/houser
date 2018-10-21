CREATE TABLE house (
  id SERIAL PRIMARY KEY NOT NULL,
  property_name varchar(100) NOT NULL,
  address varchar (500) NOT NULL,
  city varchar (50) NOT NULL,
  state varchar (2) NOT NULL,
  zip_code integer  NOT NULL,
  img varchar(500) NOT NULL
);