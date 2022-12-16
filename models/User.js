const mongoose = require('mongoose')
const bycrypt = require('bcrypt')
const validator = require('validator')

const UserSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name field cannot be empty!'],
        trim: true,
        minlength: 3,
        maxlength: 30
    },
    email: {
        type: String,
        unique: true,
        required: [true, 'Email field cannot be empty!'],
        validate: {
            validator: validator.isEmail,
            message: "Please provide valid email"
        }
    },
    password: {
        type: String,
        required: [true, 'Password field cannot be empty!'],
        minlength: 8,
    }
}, {timestamps: true})

UserSchema.pre("save", async function () {
    this.password = await bycrypt.hash(this.password, 10)
})

UserSchema.methods.comparePassword = async function(candidatePassword) {
    const isMatch = await bycrypt.compare(candidatePassword, this.password)
    return isMatch;
}

module.exports = mongoose.model('user', UserSchema)