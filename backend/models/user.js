const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    id: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    p5Balance: { type: Number, default: 100 },
    rewardsBalance: { type: Number, default: 0 },
});

const User = mongoose.model('User', userSchema);

module.exports = User;
