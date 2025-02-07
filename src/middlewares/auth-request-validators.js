const validateUserAuth = (req,res,next) => {
    if(!req.body.email || !req.body.password) {
        return res.status(400).json({
            success: false,
            data: {},
            message: 'something went wrong',
            err: 'Email and password are required'
        })
    }
    next();
}

const validateIsAdminRequest = (req,res,next) => {
    if(!req.body.id) {
        return res.status(400).json({
            success: false,
            data: {},
            message: 'something went wrong',
            err: 'User id not given'
        });
    }
    next();
}

module.exports = {
    validateUserAuth,
    validateIsAdminRequest
};