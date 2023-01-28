require("dotenv").config();
const express = require('express');
const mongo = require("mongoose");
const app = express();
app.use(express.json());

const Port = process.env.Port || 5000;

mongo.connect(process.env.MONGO_URL)
.then(()=>console.log("Connected to Mongodb database"))


const AuthRouter = require("./routes/AuthRouter");
app.use("/auth", AuthRouter);

app.listen(Port, () => {
    console.log('Server is running on ${Port}');
}) 