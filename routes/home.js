const express = require('express');

const router = express.Router();

const User = require('../database/models/User');

router.get('/', async (req, res) => {
    const allUser = await User.find();
    res.send(allUser);
});

module.exports = router;