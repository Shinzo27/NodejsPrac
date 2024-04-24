const express = require('express')
const { sendMessage, getAllMessages } = require('../Controller/message')
const { isAdminAuthenticated } = require('../Middlewares/auth')

const router = express.Router()

router.post('/send', sendMessage)
router.get('/getAll', isAdminAuthenticated , getAllMessages)

module.exports = router