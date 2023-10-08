const { promisify } = require('util');
const catchAsync = require('./../utils/catchAsync');
const AppError = require('../utils/newAppError');
const mysql = require('mysql');

const dbConnection = mysql.createConnection({
  host: process.env.host,
  user: process.env.user,
  password: process.env.password,
  database: process.env.database,
});

dbConnection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL database:', err);
  } else {
    console.log('Connected to MySQL database');
  }
});

const queryDatabase = promisify(dbConnection.query.bind(dbConnection));

// createEmployee

exports.createEmployee = catchAsync(async (req, res, next) => {
  const {
    first_name,
    last_name,
    email,
    hire_date,
    department,
    contact_type,
    contact_info,
  } = req.body;

  try {
    const sql = `INSERT INTO employee (first_name, last_name, email, hire_date, department)
    VALUES ('${first_name}', '${last_name}', '${email}', '${hire_date}', '${department}');`;
    const employee = await queryDatabase(sql);
    const sql2 = `INSERT INTO contactdetail (employee_id, contact_type, contact_info)
    VALUES ('${employee.insertId}', '${contact_type}', '${contact_info}');`;
    await queryDatabase(sql2);

    res.status(201).json({
      status: 'success',
      message: 'insertion successfull',
    });
  } catch (err) {
    next(new AppError('Error in insertion', 500));
  }
});
// List Employees with Pagination
exports.listEmployees = catchAsync(async (req, res, next) => {
  const page = req.body.page || 1;
  const limit = req.body.limit || 5;
  const offset = (page - 1) * limit;

  try {
    const sql = `SELECT * FROM employee LIMIT ${limit} OFFSET ${offset}`;
    const employees = await queryDatabase(sql);
    if (employees.length === 0) {
      return next(new AppError('Data limit reached', 404));
    }

    res.status(200).json({
      status: 'success',
      data: employees,
    });
  } catch (err) {
    next(new AppError('Error listing employees from the database', 500));
  }
});

// Get Employee by ID
exports.getEmployee = catchAsync(async (req, res, next) => {
  const employeeId = req.body.employee_id;

  try {
    const sql = `SELECT * FROM employee
    INNER JOIN contactdetail ON employee.employee_id = contactdetail.employee_id
    WHERE employee.employee_id = ${employeeId}
    `;
    const employee = await queryDatabase(sql);

    if (employee.length === 0) {
      return next(new AppError('Employee not found', 404));
    }

    res.status(200).json({
      status: 'success',
      data: employee[0],
    });
  } catch (err) {
    next(new AppError('Error fetching employee data from the database', 500));
  }
});

// Update Employee by ID
exports.updateEmployee = catchAsync(async (req, res, next) => {
  const employeeId = req.body.employee_id;
  const {
    first_name,
    last_name,
    email,
    hire_date,
    department,
    contact_type,
    contact_info,
  } = req.body;

  try {
    if (first_name || last_name || email || hire_date || department) {
      const sql = `
      UPDATE employee
      SET
        first_name = '${first_name}',
        last_name = '${last_name}',
        email = '${email}',
        hire_date = '${hire_date}',
        department = '${department}'
      WHERE employee_id = ${employeeId}
    `;
      await queryDatabase(sql);
    }

    if (contact_type || newEmail) {
      const contactDetailUpdateSQL = `UPDATE contactdetail
      SET
      contact_type = '${contact_type}',
      contact_info = '${contact_info}'
      WHERE employee_id = ${employeeId};`;

      await queryDatabase(contactDetailUpdateSQL);
    }

    res.status(200).json({
      status: 'success',
      message: 'Employee updated successfully',
    });
  } catch (err) {
    next(new AppError('Error updating employee data in the database', 500));
  }
});

// Delete Employee by ID
exports.deleteEmployee = catchAsync(async (req, res, next) => {
  const employeeId = req.body.employee_id;

  try {
    const sql2 = `DELETE FROM contactdetail WHERE employee_id=${employeeId}`;
    const sql = `DELETE FROM employee WHERE employee_id=${employeeId}`;
    await queryDatabase(sql2);
    await queryDatabase(sql);

    res.status(204).json({
      status: 'success',
    });
  } catch (err) {
    next(new AppError('Error deleting employee data from the database', 500));
  }
});
