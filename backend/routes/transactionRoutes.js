const express = require('express');
const transactionController = require('../controllers/transactionController');

const router = express.Router();

router.post('/', transactionController.createTransaction);
router.get('/', transactionController.getTransactions);
router.get('/credit/:id', transactionController.getUserCredit);
router.get('/debit/:id', transactionController.getUserDebit);
router.delete('/:id', transactionController.deleteTransaction);

module.exports = router;
