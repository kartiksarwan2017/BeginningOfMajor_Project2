const express = require('express');

const router = express.Router();

const profileController = require('../controllers/users_controller');

console.log('users Router loaded');
router.get('/profile', profileController.profile);

module.exports = router;