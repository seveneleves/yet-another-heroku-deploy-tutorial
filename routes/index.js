const express = require('express');

const router = express.Router();

router.get('/sayhi', (req, res) => {
  res.send('Hello stranger!')
})

module.exports = router;