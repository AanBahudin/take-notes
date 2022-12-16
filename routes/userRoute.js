const express = require('express')
const router = express.Router()
const {deleteuser, updateUser, showProfile, updatePassword} = require('../controllers/userController')
const {authenticateUser} = require('../middleware/authenticated')

router.route('/')
    .get(authenticateUser, showProfile)
    .delete(authenticateUser, deleteuser)

router.route('/updatePassword/:id')
    .patch(authenticateUser, updatePassword)

router.route('/:id')
    .patch(authenticateUser, updateUser)

module.exports = router