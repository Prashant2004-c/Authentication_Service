const validateUserAuth = (req,res,next) => {
    if(!req.body.email || !req.body.password) {
        res.status(400).json({
            success: false,
            data: {},
            message: 'something went wrong',
            err: 'Email and password are required'
        })
    }
    next();
}

module.exports = {validateUserAuth};