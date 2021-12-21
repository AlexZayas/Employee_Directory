const { json } = require('express');
const router = require('../routes/database');
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
const { query } = require('../database/employeeModel');
const pool = require('../database/employeeModel');

const databaseController = {};

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

databaseController.updateDirectory = async (req, res, next) => {
    try {
        const {id, columnName, updatedInformation} = req.body;
        console.log('req: ', req.body);
        //console.log('id: ', id, "columnName: ", columnName, "updatedinformation: ", updatedInformation)
        await pool.query(`UPDATE employee SET ${columnName} = '${updatedInformation}' WHERE _id = ${id}`);

        return next();
    } catch (error) {
        return next({
            log: `databaseController.updateDirectory: ERROR: ${error}`,
            message: {err: 'Error occurred in databaseController.updateDirectory. Check server log for more details.'},
        });
    }
};

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

databaseController.showAll = async (req, res, next) => {
    try {
        const data = await pool.query(`SELECT * FROM employee`);
        console.log('data.rows: ', data.rows);
        res.locals.data = data;

        return next();
    } catch (error) {
        return next({
            log: `databaseController.showAll: ERROR: ${error}`,
            message: {err: 'Error occurred in databaseController.showAll. Check server log for more details.'},
        });  
    }
};

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

databaseController.department = async (req, res, next) => {
    try {
        const { dept } = req.params
        const data = await pool.query(`SELECT * FROM employee WHERE department = ${dept}`);
        res.locals.data = data;
        return next();        
    } catch (error) {
        return next({
            log: `databaseController.department: ERROR: ${error}`,
            message: {err: 'Error occurred in databaseController.department. Check server log for more details.'},
        });  
    }
};

module.exports = databaseController;