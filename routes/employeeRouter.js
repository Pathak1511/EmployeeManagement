const express = require('express');
const employeeController = require('./../controllers/employeeController');
const router = express.Router();

router.post('/createEmployee', employeeController.createEmployee);
router.get('/getEmployee', employeeController.getEmployee);
router.get('/listEmployees', employeeController.listEmployees);
router.post('/updateEmployees', employeeController.updateEmployee);
router.delete('/deleteEmployee', employeeController.deleteEmployee);
module.exports = router;
