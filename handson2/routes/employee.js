const express = require("express");
const controller = require('../controller/employee');
const router = express.Router();

router.post('/addnewemployees', controller.saveEmployeeData);
router.get('/showallemployees', controller.getAllEmployeesData);
router.get('/highersalary', controller.getHighSalaryEmployees);
router.get('/experienced', controller.getMoreExperienceEmployees);
router.get('/graduatedafter2015', controller.getGraduatedAfter2015);
router.put('/updatesalary', controller.updateSalary);
router.delete('/deleteEmployees', controller.deleteEmployeeFromY);

{/* router.get('/getemployeedata', controller.getEmployeeData); */}

module.exports = router;