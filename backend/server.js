const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
require("dotenv").config()

const financeRoutes = require("./routes/financeRoutes")

const app = express()

app.use(cors())
app.use(express.json())

app.use("/api/finance", financeRoutes)

mongoose.connect(process.env.MONGO_URI)
.then(() => {
    console.log("MongoDB connected")
    app.listen(5000, () => {
        console.log("Server running on port 5000")
    })
})
.catch(err => console.log(err))