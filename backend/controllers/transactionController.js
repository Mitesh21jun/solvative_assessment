const User = require('../models/user')
const Transaction = require('../models/transaction')
const { v4: uuidv4 } = require('uuid')

exports.createTransaction = async (req, res) => {
    const { fromUserId, toUserId, points } = req.body
    console.log(req.body)
    const fromUser = await User.findOne({ id: fromUserId })
    const toUser = await User.findOne({ id: toUserId })

    if (!fromUser || !toUser) {
        return res.status(404).json({ error: 'One or both users not found' })
    }

    if (fromUser.p5Balance < points) {
        return res.status(400).json({ error: 'Insufficient P5 balance' })
    }

    fromUser.p5Balance -= points
    toUser.rewardsBalance += points

    await fromUser.save()
    await toUser.save()

    const transaction = new Transaction({
        id: uuidv4(),
        points,
        fromUserId,
        fromUserName:fromUser.name,
        toUserName:toUser.name,
        toUserId,
    })
    await transaction.save()

    res.status(201).json(transaction)
}

exports.getTransactions = async (req, res) => {
    const transactions = await Transaction.find()
    res.json(transactions)
}
exports.getUserDebit = async (req, res) => {
    const { id } = req.params
    console.log(id)
    const transactions = await Transaction.find({ fromUserId:id })
    console.log(transactions)
    res.json(transactions)
}

exports.getUserCredit = async (req, res) => {
    const { id } = req.params
    console.log(id)
    const transactions = await Transaction.find({ toUserId:id })
    console.log(transactions)
    res.json(transactions)
}

exports.deleteTransaction = async (req, res) => {
    const { id } = req.params
    const transaction = await Transaction.findOneAndDelete({ id })

    if (!transaction) {
        return res.status(404).json({ error: 'Transaction not found' })
    }

    const fromUser = await User.findOne({ id: transaction.fromUserId })
    const toUser = await User.findOne({ id: transaction.toUserId })

    fromUser.p5Balance += transaction.points
    toUser.rewardsBalance -= transaction.points

    await fromUser.save()
    await toUser.save()

    res.status(204).send()
}
