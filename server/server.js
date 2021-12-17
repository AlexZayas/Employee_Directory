const express = require('express');
const app = express();
const path = require('path');
const PORT = 3000;

/**
 * require routers
 */
 const apiRouter = require('./routes/api');

 /**
  * handle parsing request body
  */
 app.use(express.json());
 app.use(express.urlencoded({extended: true}));
 
 /**
  * route handlers
  */
 app.use('/api', apiRouter);
 
 /**
  * route handler to respond with main app
  */
 app.get('/', (req, res) =>{
     return res.status(200).sendFile(path.resolve(__dirname, '../client/index.html' ))
 });
 
 /**
  * catch all route handler for any requests to an unknown route
  */
 app.use('*', (req, res) => {
     return res.sendStatus(404);
 });
 
 //global error handler 
 
 app.use((err, req, res, next) => {
     const defaultErr = {
         log: "Express error handler caught unknown middleware error",
         status: 400,
         message: { err: 'An error occurred'},
       };
       const errorObj = Object.assign(defaultErr, err);
       console.log(errorObj.log);
       res.status(errorObj.status).json(errorObj.message);
 });
 
 /**
  * start server
  */
 
 app.listen(PORT, () => {
     console.log(`Server listening on port: ${PORT}` );
 });
 
 module.exports = app;