const express = require('express');
const router = express.Router();
const databaseController = require('../controllers/databaseController');

router.post('/addEmployee', databaseController.addEmployee, (req, res) => {
    res.status(200).json({'status':'New hire successfully added to directory'});
});

router.put('/update/:id', (req, res) => {
    res.status(200).json({'status': 'Employee information successfully updated'});
});


module.exports = router;