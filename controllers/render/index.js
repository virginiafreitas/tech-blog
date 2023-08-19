const dashboardRoute = require('./dashboardRoutes.js')
const homeRoute = require('./homeRoutes.js')
const loginRoute = require('./login.js')
const signupRoute = require('./signup.js')

const router = require('express').Router()

router.use('/dashboard', dashboardRoute)
router.use('/login', loginRoute)
router.use('/signup', signupRoute)
router.use('/', homeRoute)

module.exports = router