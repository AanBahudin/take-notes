const express = require('express')
const router = express.Router()
const {login, logout, createUser} = require('../controllers/authControllers')

router.route('/')
    .get(logout)

router.route('/create')
    .post(createUser)

router.route('/login')
    .post(login)

module.exports = router