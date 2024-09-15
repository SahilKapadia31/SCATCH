const { Router } = require('express')
const { registerUserFun, loginUserFun } = require('../controllers/user-controllers')
const router = Router()

// router.get('/', (req, res) => {
//     res.send('Hey its working')
// })



router.post('/register', registerUserFun)
router.post('/login', loginUserFun)

module.exports = router