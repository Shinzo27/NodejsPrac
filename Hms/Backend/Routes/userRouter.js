const express = require('express')
const { login, patientRegister, addNewAdmin }  = require('../Controller/user')
const router = express.Router()

router.post('/patient/register', patientRegister)
router.post('/admin/register', addNewAdmin)
router.post('/login', login)

module.exports = router