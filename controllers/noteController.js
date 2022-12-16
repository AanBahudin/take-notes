const Note = require('../models/Notes')
const {StatusCodes} = require('http-status-codes')
const checkPermission = require('../utils/checkPermission')

const create = async(req, res) => {
    const {title, notes} = req.body

    if(!title || !notes) {
        res.status(StatusCodes.BAD_REQUEST).json({success: false, msg: `please fill up title and note field `})
    }

    const note = await Note.create({title, note:notes, user: req.user.userId})
    if(!notes) {
        res.status(StatusCodes.BAD_REQUEST).json({success: false, msg: `cannot create note, try again later!`})
    }

    res.status(StatusCodes.OK).json({success: true, data: note})
}
const getAllNotes = async(req, res) => {
    
    const note = await Note.find({user: req.user.userId})
    
    res.status(StatusCodes.OK).json(note)
}

const getSingleNotes = async(req, res) => {
    const {id: notesId} = req.params

    const note = await Note.findOne({_id: notesId})

    // check if note doesn't exist
    if(!note) {
        res.status(StatusCodes.NOT_FOUND).json({success: false, msg: `cannot find note, try again later!`})
    }

    // check if user cannot access another user's notes
    checkPermission(note.user, req.user.userId)

    res.status(StatusCodes.OK).json({success: true, note})
}

const updateNote = async(req, res) => {
    const {id: notesId} = req.params
    const {title, notes} = req.body

    const note = await Note.findOne({_id: notesId})
    // check if notes doesn't exist
    if(!note) {
        res.status(StatusCodes.NOT_FOUND).json({success: false, msg: `cannot found and edit this note, try again later!`})
    }
    
    // check if user cannot access another user's notes
    checkPermission(note.user, req.user.userId)

    // change title and note value in database
    // if title or notes has no value, then use the old value ini database
    note.title = !title ? note.title : title
    note.note =  !notes ? note.note : notes

    // save changes
    await note.save();

    res.status(StatusCodes.OK).json({success: true, msg: 'note successfully updated', note})
}

const deleteNotes = async(req, res) => {
    const {id: notesId} = req.params

    // find specific note
    const note = await Note.findOne({_id: notesId})

    // check if note doesn't exist in database
    if(!note) {
        res.status(StatusCodes.NOT_FOUND).json({success: false, msg: `cannot found and delete this note, try again later!`})
    }

    // check if user cannot access another user's notes
    checkPermission(note.user, req.user.userId)

    // remove found note
    await note.remove()

    res.status(StatusCodes.OK).json({success: true, msg: 'Successfully deleted'})
}

const deleteAllNotes = async(req, res) => {

    const note = await Note.findOne({user: req.user.userId})
    if(!note) {
        return res.status(StatusCodes.BAD_REQUEST).json({success: false, msg: 'failed to delete notes, try again later!'})
    }

    checkPermission(note.user, req.user.userId)

    const deletedNote = await Note.deleteMany({user: req.user.userId})

    res.status(StatusCodes.OK).json({success: true, msg: 'All notes successfully deleted!'})
}

module.exports = {
    create,
    getAllNotes,
    getSingleNotes,
    updateNote,
    deleteNotes,
    deleteAllNotes
}