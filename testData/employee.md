```sql
CREATE TABLE Employee (
    employee_id INT PRIMARY KEY AUTO_INCREMENT,
    first_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    hire_date DATE,
    department VARCHAR(255)
);
```

```sql
INSERT INTO Employee (first_name, last_name, email, hire_date, department) VALUES
('John', 'Doe', 'johndoe@example.com', '2020-05-15', 'HR'),
('Jane', 'Smith', 'janesmith@example.com', '2019-10-10', 'Sales'),
('Michael', 'Johnson', 'michael@example.com', '2021-02-28', 'Engineering'),
('Emily', 'Brown', 'emily@example.com', '2022-01-12', 'Marketing'),
('David', 'Lee', 'david@example.com', '2020-08-20', 'Finance'),
('Olivia', 'Wilson', 'olivia@example.com', '2018-12-03', 'HR'),
('William', 'Martinez', 'william@example.com', '2019-04-30', 'Engineering'),
('Sophia', 'Anderson', 'sophia@example.com', '2021-07-05', 'Sales'),
('James', 'Harris', 'james@example.com', '2022-03-19', 'Marketing'),
('Emma', 'Garcia', 'emma@example.com', '2021-09-08', 'Finance'),
('Liam', 'Rodriguez', 'liam@example.com', '2019-11-25', 'HR'),
('Ava', 'Davis', 'ava@example.com', '2020-06-14', 'Engineering'),
('Alexander', 'Clark', 'alexander@example.com', '2018-07-22', 'Sales'),
('Mia', 'White', 'mia@example.com', '2021-01-30', 'Marketing'),
('Ethan', 'Moore', 'ethan@example.com', '2022-02-14', 'Finance'),
('Oliver', 'Taylor', 'oliver@example.com', '2019-03-05', 'HR'),
('Charlotte', 'Johnson', 'charlotte@example.com', '2020-09-17', 'Engineering'),
('Amelia', 'Walker', 'amelia@example.com', '2021-08-09', 'Sales'),
('Lucas', 'Perez', 'lucas@example.com', '2022-04-23', 'Marketing'),
('Harper', 'Young', 'harper@example.com', '2020-10-29', 'Finance');

```

```sql

CREATE TABLE ContactDetail (
    contact_id INT PRIMARY KEY AUTO_INCREMENT,
    employee_id INT,
    contact_type VARCHAR(50) NOT NULL,
    contact_info VARCHAR(255) NOT NULL,
    FOREIGN KEY (employee_id) REFERENCES Employee(employee_id)
);
```

```sql
INSERT INTO ContactDetail (employee_id, contact_type, contact_info) VALUES
(1, 'Phone', '123-456-7890'),
(1, 'Email', 'john.doe@workemail.com'),
(2, 'Phone', '987-654-3210'),
(2, 'Email', 'jane.smith@workemail.com'),
(3, 'Phone', '555-555-5555'),
(3, 'Email', 'michael.johnson@workemail.com'),
(4, 'Phone', '444-444-4444'),
(4, 'Email', 'emily.brown@workemail.com'),
(5, 'Phone', '777-777-7777'),
(5, 'Email', 'david.lee@workemail.com'),
(6, 'Phone', '999-999-9999'),
(6, 'Email', 'olivia.wilson@workemail.com'),
(7, 'Phone', '222-222-2222'),
(7, 'Email', 'william.martinez@workemail.com'),
(8, 'Phone', '333-333-3333'),
(8, 'Email', 'sophia.anderson@workemail.com'),
(9, 'Phone', '666-666-6666'),
(9, 'Email', 'james.harris@workemail.com'),
(10, 'Phone', '888-888-8888'),
(10, 'Email', 'emma.garcia@workemail.com'),
(11, 'Phone', '111-111-1111'),
(11, 'Email', 'liam.rodriguez@workemail.com'),
(12, 'Phone', '444-555-6666'),
(12, 'Email', 'ava.davis@workemail.com'),
(13, 'Phone', '123-456-7890'),
(13, 'Email', 'alexander.clark@workemail.com'),
(14, 'Phone', '987-654-3210'),
(14, 'Email', 'mia.white@workemail.com'),
(15, 'Phone', '555-555-5555'),
(15, 'Email', 'ethan.moore@workemail.com'),
(16, 'Phone', '444-444-4444'),
(16, 'Email', 'oliver.taylor@workemail.com'),
(17, 'Phone', '777-777-7777'),
(17, 'Email', 'charlotte.johnson@workemail.com'),
(18, 'Phone', '999-999-9999'),
(18, 'Email', 'amelia.walker@workemail.com'),
(19, 'Phone', '222-222-2222'),
(19, 'Email', 'lucas.perez@workemail.com'),
(20, 'Phone', '333-333-3333'),
(20, 'Email', 'harper.young@workemail.com');


```
