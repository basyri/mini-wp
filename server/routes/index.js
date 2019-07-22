const router = require('express').Router()
const userRoutes = require('./userRoutes')
const articleRoutes = require('./articleRoute')

router.use('/user', userRoutes)
router.use('/article', articleRoutes)

module.exports = router