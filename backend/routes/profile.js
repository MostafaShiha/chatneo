const express = require('express');
const router = express.Router();
const User = require('../models/User');

router.get('/', async (req, res) => {
  const user = await User.findById(req.user.id);
  res.send(user);
});

module.exports = router;
