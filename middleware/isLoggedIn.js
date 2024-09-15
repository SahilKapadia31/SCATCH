const jwt = require('jsonwebtoken');
const userModel = require('../models/user-model')

const isLoggedIn = async (req, res, next) => {
    try {
        if (!req.cookies.token) {
            req.flash("error", "you need to login first");
            return res.redirect('/')
        }

        let decode = jwt.verify(req.cookies.token, process.env.JWT_KEY);
        let user = await userModel.findOne({ email: decode.email }).select('-password')
        req.user = user
        next();

    } catch (error) {
        req.flash('error', 'Something went wrong');
        res.redirect('/')
    }
}

module.exports = { isLoggedIn }