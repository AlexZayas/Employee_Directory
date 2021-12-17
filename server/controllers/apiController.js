const { json } = require('express');
const router = require('../routes/api');
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

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

apiController.employee = async (req, res, next) => {
    try {
        const responseData = await fetch('https://randomuser.me/api/');
        const jsonData = await responseData.json();
        console.log('JsonData: ',jsonData);
        res.locals.jsonData = jsonData;
       return next();
    } catch (error) {
        return next({
            log: `apiController.posts: ERROR: ${error}`,
            message: {err: 'Error occurred in apiController.posts. Check server log for more details.'},
        });
    }
};


module.exports = apiController;