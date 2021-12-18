const { json } = require('express');
const router = require('../routes/database');
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
const { query } = require('../database/employeeModel');
const pool = require('../database/employeeModel');

const databaseController = {};

databaseController.addEmployee = async (req, res, next) => {
    try {
        const {firstName, lastName, picture, jobTitle, department, startDate, phoneNumber, email, location } = req.query;
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
        const id = req.params.id;
        
        
    } catch (error) {
        
    }
}


module.exports = databaseController;