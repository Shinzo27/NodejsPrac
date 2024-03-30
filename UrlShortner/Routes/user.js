const express = require("express")
const { handleUserSignUp } = require("../Controller/user")

const router = express.router()

router.post('/', handleUserSignUp)
module.exports = router