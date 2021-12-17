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
 * retrieve employee information
 */
apiController.employee = async (req, res, next) => {
    try {
        const titles = ['Software Engineer','Manager', 'Human Resources'];
        const departments = ['Software Development', 'Management', 'HR'];



        const responseData = await fetch('https://randomuser.me/api/');
        const jsonData = await responseData.json();
        console.log('JsonData: ',jsonData);

      
           let index = 0;
           while(index < title.length){
               if(index = title.length) index = 0;
          await pool.query(`INSERT INTO employee(first_name, last_name, picture, job_title, department, start_date, phone_number, email, location)
           VALUES(${jsonData.results[0].name.first}, ${jsonData.results[0].name.last}, ${jsonData.results[0].picture.thumbnail}, ${titles[index]}, ${departments[index]}, ${jsonData.results[0].registered.date}, ${jsonData.results[0].phone}, ${jsonData.results[0].email}, ${jsonData.results[0].location.state})`); 
           index++
        };

        res.locals.jsonData = jsonData;
       return next();
    } catch (error) {
        return next({
            log: `apiController.posts: ERROR: ${error}`,
            message: {err: 'Error occurred in apiController.posts. Check server log for more details.'},
        });
    }
};

/**
 * store employee information
 */
// apiController.addToDB =  (req, res, next) => {
//     try {
//         const titles = ['Software Engineer','Manager', 'Human Resources'];
//         const departments = ['Software Development', 'Management', 'HR'];

//         function insertIntoDB (jsonData) {

//         }




//     } catch (error) {
        
//     }
// }

module.exports = apiController;