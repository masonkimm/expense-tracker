const express = require('express');
const router = express.Router();
const {
  getTransactions,
  addTransaction,
  deleteTransaction,
} = require('../controllers/transactions');

// to get and post
router.route('/').get(getTransactions).post(addTransaction);

//to delete
router.route('/:id').delete(deleteTransaction);

module.exports = router;
