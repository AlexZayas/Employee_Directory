const { json } = require('express');
const router = require('../routes/database');
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
const { query } = require('../database/employeeModel');
const pool = require('../database/employeeModel');

const databaseController = {};

//this adds an employee to the directory with information input via the client rather than the information retrieved from the random user generator
databaseController.addEmployee = async (req, res, next) => {
    try {
        const {firstName, lastName, picture, jobTitle, department, startDate, phoneNumber, email, location } = req.body;
        await pool.query(`INSERT INTO employee(first_name, last_name, picture, job_title, department, start_date, phone_number, email, location)
        VALUES('${firstName}', '${lastName}', '${picture}', '${jobTitle}', '${department}', '${startDate}', '${phoneNumber}', '${email}', '${location}')`);

        return next(); 
    } catch (error) {
        return next({
            log: `databaseController.addEmployee: ERROR: ${error}`,
            message: {err: 'Error occurred in databaseController.addEmployee. Check server log for more details.'},
        });
    }

};

//update employee record
databaseController.updateDirectory = async (req, res, next) => {
    try {
        const {id, columnName, updatedInformation} = req.body;
        await pool.query(`UPDATE employee SET ${columnName} = '${updatedInformation}' WHERE _id = ${id}`);

        return next();
    } catch (error) {
        return next({
            log: `databaseController.updateDirectory: ERROR: ${error}`,
            message: {err: 'Error occurred in databaseController.updateDirectory. Check server log for more details.'},
        });
    }
};

//delete employee by ID
databaseController.deleteRecord = async (req, res, next) => {
    try {
        const { id } = req.params;
        await pool.query(`DELETE FROM employee WHERE _id = ${id}`);
        
        return next();
    } catch (error) {
        return next({
            log: `databaseController.deleteRecord: ERROR: ${error}`,
            message: {err: 'Error occurred in databaseController.deleteRecord. Check server log for more details.'},
        });
    }
};

//retrieve all employees
databaseController.showAll = async (req, res, next) => {
    try {
        const data = await pool.query(`SELECT * FROM employee`);
        res.locals.data = data.rows;

        return next();
    } catch (error) {
        return next({
            log: `databaseController.showAll: ERROR: ${error}`,
            message: {err: 'Error occurred in databaseController.showAll. Check server log for more details.'},
        });  
    }
};

//Filter employees by title
databaseController.title = async (req, res, next) => {
    try {
        const { title } = req.params
        const data = await pool.query(`SELECT * FROM employee WHERE job_title = ${title}`);
        res.locals.data = data;
        return next();        
    } catch (error) {
        return next({
            log: `databaseController.title: ERROR: ${error}`,
            message: {err: 'Error occurred in databaseController.title. Check server log for more details.'},
        });  
    }
};

// Filter employees by department
databaseController.department = async (req, res, next) => {
    try {
        const { department } = req.params
        const data = await pool.query(`SELECT * FROM employee WHERE department = ${department}`);
        res.locals.data = data;
        return next();        
    } catch (error) {
        return next({
            log: `databaseController.department: ERROR: ${error}`,
            message: {err: 'Error occurred in databaseController.department. Check server log for more details.'},
        });  
    }
};

// Search employee by 
databaseController.searchBy = async (req, res, next) => {
    try {
        const {columnName, value} = req.query;
        const data = await pool.query(`SELECT * FROM employee WHERE ${columnName} = '${value}'`);
        res.locals.data = data;
    } catch (error) {
        return next({
            log: `databaseController.searchBy: ERROR: ${error}`,
            message: {err: 'Error occurred in databaseController.searchBy. Check server log for more details.'},
        });  
    }

};

module.exports = databaseController;