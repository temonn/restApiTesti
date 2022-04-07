const express = require('express');
const router = express.Router();
const programmingLanguages = require('../services/bankapiACCOUNTS');

router.get('/accounts', async function(req, res, next) {
    try {
      res.json(await programmingLanguages.getMultiple(req.query.page));
    } catch (err) {
      console.error(`Error while getting account data `, err.message);
      next(err);
    }
  });

  module.exports = router;