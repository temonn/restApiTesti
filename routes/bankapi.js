const express = require('express');
const router = express.Router();
const programmingLanguages = require('../services/bankapi');

router.get('/clients', async function(req, res, next) {
  try {
    res.json(await programmingLanguages.getMultiple(req.query.page));
  } catch (err) {
    console.error(`Error while getting client data `, err.message);
    next(err);
  }
});
/*
router.get('/accounts', async function(req, res, next) {
  try {
    res.json(await programmingLanguages.getMultiple(req.query.page));
  } catch (err) {
    console.error(`Error while getting account data `, err.message);
    next(err);
  }
});

router.get('/cards', async function(req, res, next) {
  try {
    res.json(await programmingLanguages.getMultiple(req.query.page));
  } catch (err) {
    console.error(`Error while getting card data `, err.message);
    next(err);
  }
});

router.get('/transactions', async function(req, res, next) {
  try {
    res.json(await programmingLanguages.getMultiple(req.query.page));
  } catch (err) {
    console.error(`Error while getting transaction data `, err.message);
    next(err);
  }
});*/

module.exports = router;

