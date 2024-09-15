const { Router } = require('express')
const { creatOwnerFun } = require('../controllers/owner-controller')
const router = Router()

// console.log(process.env.NODE_ENV)

router.get('/', (req, res) => {
    res.send('Hey its working')
})

// if (process.env.NODE_ENV === 'development') {
router.post('/create', creatOwnerFun)
// }

module.exports = router