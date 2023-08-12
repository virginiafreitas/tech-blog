const dashboardRoute = require('./dashboard-route')
const homeRoute = require('./home-route')
const loginRoute = require('./login')
const signupRoute = require('./signup')

const router = require('express').Router()

router.use('/dashboard', dashboardRoute)
router.use('/login', loginRoute)
router.use('/signup', signupRoute)
router.use('/', homeRoute)

module.exports = router