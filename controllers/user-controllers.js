const userModel = require('../models/user-model');
const bcrypt = require('bcrypt');
const { generateToken } = require('../utils/generateToken');

const registerUserFun = async (req, res) => {
    try {
        let { fullName, email, password } = req.body

        let user = await userModel.findOne({ email: email });
        if (user) return res.status(401).send('You already have an account, please login')

        bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(password, salt, async (err, hash) => {
                if (err) return res.send(err.message)
                else {
                    let user = await userModel.create({ fullName, email, password: hash });

                    let token = generateToken(user)
                    res.cookie("token", token)
                }
            })
        })

        res.send(user)
    } catch (error) {
        res.send(error.message);
    }
}

const loginUserFun = async (req, res) => {
    try {
        let { email, password } = req.body
        let user = await userModel.findOne({ email: email })
        if (!user) return res.send("Email or Password incorrect")

        bcrypt.compare(password, user.password, (err, result) => {
            if (result) {
                let token = generateToken(user)
                res.cookie("token", token)
            } else {
                return res.send("Email or Password incorrect")
            }
        })

        res.send("Login successful");
    } catch (error) {
        res.status(500).send(error.message);
    }
}

module.exports = { registerUserFun, loginUserFun }