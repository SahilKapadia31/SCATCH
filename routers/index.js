const express = require('express')
const router = express.Router()
const isLoggedIn = require('../middleware/isLoggedIn')

router.get('/', (req, res) => {
    try {
        return res.render("index")
    } catch (error) {
        console.log(error)
    }
})

module.exports = router;