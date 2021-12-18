const { json } = require('express');
const router = require('../routes/api');
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
const { query } = require('../database/employeeModel');
const pool = require('../database/employeeModel');


const apiController = {};

/** 
 * Test .ping 
 */

apiController.ping = (req,res,next) => {
try {
    return next(); 
} catch (error) {
    return next({
        log: `apiController.ping: ERROR: ${error}`,
            message: {err: 'Error occurred in apiController.ping. Check server log for more details.'},
    });
    
}
};

/**
 * retrieve employee information and store that information into DB in order to persist that data for 
 * CRUD and Search functionality which will be in database controller
 */
apiController.employee = async (req, res, next) => {
    try {
        //titles and departments are not available as responses from the Api
        //so I have created my own and will add them to the randomly generated employees.

        const titles = ['SoftwareEngineer','Manager', 'HumanResources'];
        const departments = ['SoftwareDevelopment', 'Management', 'HR'];

        // using function and index variable to coordinate title and department when adding employee into DB
        function randomNumber() { 
            return Math.floor(Math.random() * (2 - 0 + 1)) + 0;
        } 
        let index = randomNumber()

        const responseData = await fetch('https://randomuser.me/api/');
        const jsonData = await responseData.json();
        console.log('JsonData: ',jsonData);

        await pool.query(`INSERT INTO employee(first_name, last_name, picture, job_title, department, start_date, phone_number, email, location)
        VALUES('${jsonData.results[0].name.first}', '${jsonData.results[0].name.last}', '${jsonData.results[0].picture.thumbnail}', '${titles[index]}', '${departments[index]}', '${jsonData.results[0].registered.date.slice(0,10)}', '${jsonData.results[0].phone}', '${jsonData.results[0].email}', '${jsonData.results[0].location.state}')`);
    
        res.locals.jsonData = jsonData;
       return next();
    } catch (error) {
        return next({
            log: `apiController.employee: ERROR: ${error}`,
            message: {err: 'Error occurred in apiController.employee. Check server log for more details.'},
        });
    }
};

module.exports = apiController;