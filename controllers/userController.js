const Note = require('../models/Notes')
const {StatusCodes} = require('http-status-codes')
const {createToken, attachCookiesToResponse} = require('../utils/userToken')
const User = require('../models/User')


const showProfile = async(req,res) => {
    const user = await User.findById({_id: req.user.userId})
    const note = await Note.findOne({user: req.user.userId}).countDocuments()
    res.status(StatusCodes.OK).json({name: user.name, userId: req.user.userId, email: user.email, Notes: note})
}

const updateUser = async(req, res) => {
    const {newName, newEmail} = req.body
    const {userId} = req.user

    const user = await User.findOne({_id: userId})

    const isEmailAlreadyExist = await User.findOne({email: newEmail})

    if(isEmailAlreadyExist) {
        res.status(StatusCodes.BAD_REQUEST).json({success: false, msg: 'Email is already taken, try to using different email!'})
    }

    const updatingUser = await User.findOneAndUpdate({_id: userId}, {name: newName ? newName : user.name, email: newEmail ? newEmail : user.email},  {new: true, runValidators: true})
    // attach token and store updated information in req.user
    const payload = {userId: updatingUser._id, name: updatingUser.name, email:updatingUser.email}
    // creating new token with updated user information
    const token = createToken(payload)
    // stored information in token
    attachCookiesToResponse(res, payload)

    // overide req.user information
    req.user.userId = updatingUser._id
    req.user.name = updatingUser.name
    req.user.email = updatingUser.email

    res.status(StatusCodes.OK).json({success: true, msg: `Successfully updated user!`, user: updatingUser})
}

const updatePassword = async(req, res) => {
    const {oldPassword, newPassword} = req.body
    const {userId} = req.user

    if(!oldPassword || !newPassword) {
        res.status(StatusCodes.BAD_REQUEST).json({success: false, msg: `New Password or Old Password Cannot be Empty!`})
    }

    const user = await User.findOne({_id: userId})
    if(!user) {
        res.status(StatusCodes.NOT_FOUND).json({success: false, msg: `Cannot find and update user!`})
    }

    // comparing old password in database and user input, if false then user cannot update their passoword
    const comparingPassword = await user.comparePassword(oldPassword)
    if(!comparingPassword) {
        res.status(StatusCodes.BAD_REQUEST).json({success: false, msg: `Invalid Old Password, Please try again!`})
    }

    user.password = newPassword
    await user.save()
    res.status(StatusCodes.OK).json({success: true, msg: `password is successfully updated!`})

}

const deleteuser = async(req, res) => {
    const user = await User.findOne({_id: req.user.userId})

    if(!user) {
        res.status(StatusCodes.NOT_FOUND).json({success: false, msg: `Cannot delete user with id: ${req.user.userId}`})
    }
    await user.remove()

    res.status(StatusCodes.OK).json({success: true, msg: 'Successfully deleted!'})

}


module.exports = {
    showProfile,
    updateUser,
    deleteuser,
    updatePassword
}