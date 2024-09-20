const express = require('express');
const router = express.Router();

router.get('/', function (req, res) {
    res.send("Hey, It's working fine");
});

module.exports = router;