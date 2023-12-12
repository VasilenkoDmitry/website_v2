const Router = require('express')
const router = new Router()
const CinemaController = require('../controllers/CinemaController')
const checkRole = require('../middleware/checkRoleMiddleware')



router.post('/',checkRole('ADMIN'),CinemaController.create)
router.get('/',CinemaController.getAll)



module.exports = router