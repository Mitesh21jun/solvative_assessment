const express = require('express');
const userController = require('../controllers/userController');

const router = express.Router();

router.post('/', userController.createUser);
router.get('/', userController.getAllUsers);
router.put('/:id', userController.editUser);
router.get('/:id', userController.getUser);

module.exports = router;
