const CustomError = require('../errors')


const checkPermission = (userNote, requestedId) => {
    if(userNote.toString() !== requestedId) {
        throw new CustomError.NotFoundError(`No item found item`)
    }
    
    if(userNote.toString() === requestedId) {
        return;
    }
}

module.exports = checkPermission