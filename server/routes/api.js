const express = require('express');
const router = express.Router();
const app = require('../server');
const apiController = require('../controllers/apiController');

/* test route */
router.get('/ping', apiController.ping, (req, res) => {
    res.status(200).json({"success": true})
});

router.get('/employee', apiController.employee, (req, res) => {
    res.status(200).json(
        res.locals.jsonData
    );
});

module.exports = router;