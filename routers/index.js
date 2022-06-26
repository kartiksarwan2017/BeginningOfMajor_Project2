const express = require('express');
const homeController = require('../controllers/home_controller');
const profileController = require('../controllers/profile_controller');

const router = express.Router();

console.log('router loaded');
router.get('/', homeController.home);
router.get('/profile', profileController.profile);


module.exports = router;