const express = require('express');

const router = express.Router();

router.post('/add-product', (req, res) => {
    console.log("Adding Product");
});

module.exports = router;