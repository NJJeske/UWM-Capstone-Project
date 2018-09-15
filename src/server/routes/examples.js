const express = require('express');
const router = express.Router();

router.get('/all', (req, res, next) => {
  res.status(200).send('all');
});

module.exports = router;
