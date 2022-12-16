const User = require('../models/User')
const {StatusCodes} = require('http-status-codes')
const CustomError = require('../errors')
const {createToken, attachCookiesToResponse} = require('../utils/userToken')


const createUser = async(req, res) => {
    const {name, email, password} = req.body

    if(!name || !email || !password) {
        res.status(StatusCodes.BAD_REQUEST).json({success: false, msg: 'Please provide name, email, & password'})
    }

    if(password.length < 8) {
        res.status(StatusCodes.BAD_REQUEST).json({success: false, msg: 'Password Length is should be more than 8 character!'})
    }

    const checkEmail = await User.findOne({email});
    if(checkEmail) {
        res.status(StatusCodes.BAD_REQUEST).json({success: false, msg: 'Email is already taken, please use different email'})
    }

    const user = await User.create({name, email, password})
    if(!user) {
        res.status(StatusCodes.BAD_REQUEST).json({success: false, msg: 'Failed To Created User, Please Try Again Later!'})
    }
    // sending response
    res.status(StatusCodes.CREATED).json({succes: true, message: 'Successfully creating user!', data: user})
}

const login = async(req, res) => {
    const {email, password} = req.body
    if(!email || !password) {
        res.status(StatusCodes.BAD_REQUEST).json({success: false, msg: 'Please provide email & password'})
    }

    const user = await User.findOne({email})
    if(!user) {
        res.status(StatusCodes.NOT_FOUND).json({success: false, msg: 'Cannot find this user'})
    }

    const isPasswordMatch = await user.comparePassword(password)
    if(!isPasswordMatch) {
        res.status(StatusCodes.BAD_REQUEST).json({success: false, msg: 'Wrong Password, Please Try Again!'})
    }

    const payload = {userId: user._id, name: user.name, email:user.email}
    createToken(payload)
    
    // attach token to cookies
    attachCookiesToResponse(res, payload)
    res.status(StatusCodes.OK).json({user: payload,success: true})
    
}

const logout = async(req, res) => {
    res.cookie('token', 'logout', {
        expires: new Date(Date.now() + 5 * 1000),
        httpOnly: true
    })

    res.status(StatusCodes.OK).json({success: true, msg: 'logout successfully!'})
}

module.exports = {
    createUser,
    login,
    logout
}