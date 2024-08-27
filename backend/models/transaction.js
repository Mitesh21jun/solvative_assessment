const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
    id: { type: String, required: true, unique: true },
    timestamp: { type: Date, default: Date.now },
    points: { type: Number, required: true },
    fromUserId: { type: String, required: true },
    toUserId: { type: String, required: true },
    fromUserName: { type: String, required: true },
    toUserName: { type: String, required: true },
});

const Transaction = mongoose.model('Transaction', transactionSchema);

module.exports = Transaction;
