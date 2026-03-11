const express = require("express")
const router = express.Router()

const { createFinance } = require("../controllers/financeController")

router.post("/analyze", createFinance)

module.exports = router