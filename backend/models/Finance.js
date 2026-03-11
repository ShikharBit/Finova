const mongoose = require("mongoose")

const financeSchema = new mongoose.Schema({

    income: Number,

    expenses: Number,

    savings: Number,

    goal: String,

    advice: String

})

module.exports = mongoose.model("Finance", financeSchema)