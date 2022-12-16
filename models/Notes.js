const mongoose = require('mongoose')

const NoteSchema = mongoose.Schema({
    title: {
        type: String,
        trim: true,
        default: ['untitled'],
        maxlength: 100
    },
    note: {
        type: String,
        trim: true,
        required: [true, 'Notes cannot be empty!'],
        minlength: 10
    },
    user: {
        type: mongoose.Schema.ObjectId,
        ref: 'user',
        required: true
    }
}, {timestamps: true})

module.exports = mongoose.model('note', NoteSchema)