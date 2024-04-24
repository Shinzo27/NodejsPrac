const express = require('express')
const { postAppointment } = require('../Controller/appointment')
const { isPatientAuthenticated } = require('../Middlewares/auth')

const router = express.Router()

router.post('/post', isPatientAuthenticated , postAppointment)

module.exports = router