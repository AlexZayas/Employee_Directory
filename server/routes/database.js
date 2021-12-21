const express = require('express');
const router = express.Router();
const databaseController = require('../controllers/databaseController');

router.post('/addEmployee', databaseController.addEmployee, (req, res) => {
    res.status(200).json({'status':'New hire successfully added to directory'});
});

router.put('/update', databaseController.updateDirectory, (req, res) => {
    res.status(200).json({'status': 'Employee information successfully updated'});
});

router.delete('/delete/:id', databaseController.deleteRecord , (req, res) => {
    res.status(200).json({'status': 'Employee record deleted'});
});

router.get('/showAll', databaseController.showAll , (req, res) => {
    res.status(200).json(res.locals.data);
});

router.get('/title/:title', databaseController.title, (req, res) => {
    res.status(200).json(res.locals.data);
});

router.get('/department/:dept', databaseController.department, (req, res) => {
    res.status(200).json(res.locals.data);
});

module.exports = router;