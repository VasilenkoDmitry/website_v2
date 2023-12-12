const Router = require('express')
const router = new Router()
const paymentstatusController = require('../controllers/paymentstatusController')


router.post('/', paymentstatusController.create)
router.get('/', paymentstatusController.getAll)


module.exports = router