const Router = require('express')
const router = new Router()
const movieController = require('../controllers/movieController')
const checkRole = require('../middleware/checkRoleMiddleware')



router.post('/', checkRole('ADMIN'), movieController.create)
router.get('/', movieController.getAll)


module.exports = router