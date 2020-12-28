const express = require('express');

const router = express.Router();

router.get('/sayhi', (req, res) => {
  res.send('Welcome stranger!')
})

module.exports = router;