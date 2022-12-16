const express = require('express')
const router = express.Router()
const {create, getAllNotes, getSingleNotes, updateNote, deleteAllNotes, deleteNotes} = require('../controllers/noteController')
const {authenticateUser} = require('../middleware/authenticated')

router.route('/create')
    .post(authenticateUser, create)
    
router.route('/')
    .get(authenticateUser, getAllNotes)
    .delete(authenticateUser, deleteAllNotes)

router.route('/:id')
    .get(authenticateUser, getSingleNotes)
    .delete(authenticateUser, deleteNotes)
    .patch(authenticateUser, updateNote)

module.exports = router