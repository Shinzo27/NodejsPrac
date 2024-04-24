const express = require('express')
const { login, patientRegister, addNewAdmin, getAllDoctors, getUserDetails, logoutAdmin, logoutUser, addNewDoctor }  = require('../Controller/user')
const { isAdminAuthenticated, isPatientAuthenticated } = require('../Middlewares/auth')

const router = express.Router()

router.post('/patient/register', patientRegister)
router.post('/admin/register', isAdminAuthenticated , addNewAdmin)
router.post('/login', login)
router.get('/doctors', getAllDoctors)
router.get('/admin/me', isAdminAuthenticated , getUserDetails)
router.get('/patient/me', isPatientAuthenticated , getUserDetails)
router.get('/admin/logout', isAdminAuthenticated , logoutAdmin)
router.get('/patient/logout', isPatientAuthenticated , logoutUser)
router.post('/doctor/register', isAdminAuthenticated , addNewDoctor)

module.exports = router