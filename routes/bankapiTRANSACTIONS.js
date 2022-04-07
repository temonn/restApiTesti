const express = require('express');
const router = express.Router();
const programmingLanguages = require('../services/bankapiTRANSACTIONS');

router.get('/transactions', async function(req, res, next) {
    try {
      res.json(await programmingLanguages.getMultiple(req.query.page));
    } catch (err) {
      console.error(`Error while getting transaction data `, err.message);
      next(err);
    }
  });

  module.exports = router;