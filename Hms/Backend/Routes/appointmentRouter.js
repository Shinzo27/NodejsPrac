const express = require('express')
const { postAppointment, getAllAppointment, updateAppointment, deleteAppointment } = require('../Controller/appointment')
const { isPatientAuthenticated, isAdminAuthenticated } = require('../Middlewares/auth')

const router = express.Router()

router.post('/post', isPatientAuthenticated , postAppointment)
router.get('/getAll', isAdminAuthenticated , getAllAppointment)
router.put('/update/:id', isAdminAuthenticated , updateAppointment)
router.delete('/delete/:id', isAdminAuthenticated , deleteAppointment)

module.exports = router