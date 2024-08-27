const User = require('../models/user');
const { v4: uuidv4 } = require('uuid');

exports.createUser = async (req, res) => {
    const { name } = req.body;
    const user = new User({ id: uuidv4(), name });
    await user.save();
    res.status(201).json(user);
};

exports.editUser = async (req, res) => {
    const { id } = req.params;
    const { name } = req.body;
    const user = await User.findOneAndUpdate({ id }, { name }, { new: true });

    if (!user) {
        return res.status(404).json({ error: 'User not found' });
    }

    res.json(user);
};

exports.getUserBalance = async (req, res) => {
    const { id } = req.params;
    const user = await User.findOne({ id });

    if (!user) {
        return res.status(404).json({ error: 'User not found' });
    }

    res.json({ p5Balance: user.p5Balance, rewardsBalance: user.rewardsBalance });
};

exports.getAllUsers = async (req, res) => {
    const user = await User.findOne({ id });
    res.json(user);
};
