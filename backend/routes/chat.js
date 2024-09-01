const express = require('express');
const router = express.Router();

router.post('/', async (req, res) => {
  const { message } = req.body;
  // Process the message with AI model here
  res.send({ success: true });
});

module.exports = router;
