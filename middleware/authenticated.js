const CustomError = require('../errors')
const { verifyToken } = require('../utils/userToken')

const authenticateUser = (req,res,next) => {
    const token = req.signedCookies.token

    if(!token) {
        throw new CustomError.UnauthenticatedError('Cannot make request in this endpoint')
    }

    try {
        const payload = verifyToken(token)
        req.user = {name: payload.name, userId: payload.userId, email: payload.email}
        next()
    } catch (error) {
        throw new CustomError.UnauthenticatedError('authenticated failed')
    }
}

module.exports = {
    authenticateUser
}