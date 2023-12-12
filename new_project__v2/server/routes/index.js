const Router = require('express')
const router = new Router()


const CinemaRouter = require('./CinemaRouter')
const eventRouter = require('./eventRouter')
const movieRouter = require('./movieRouter')
const OrderRouter = require('./OrderRouter')
const paymentstatusRouter = require('./paymentstatusRouter')
const placeRouter = require('./placeRouter')
const userRouter = require('./userRouter')
const paymentRouter = require('./paymentRouter')


router.use('/cinema',CinemaRouter)
router.use('/event',eventRouter)
router.use('/movie',movieRouter,)
router.use('/order',OrderRouter)
router.use('/paymentstatus',paymentstatusRouter)
router.use('/place',placeRouter)
router.use('/user',userRouter)
router.use('/payment',paymentRouter)

module.exports = router