const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');

const mongoose = require('mongoose');
const app = express();
app.use((req, res, next) => {
  const allowedOrigin = 'https://sprightly-gumdrop-c46663.netlify.app';
  res.header('Access-Control-Allow-Origin', allowedOrigin);
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  res.header('Access-Control-Allow-Credentials', 'true'); // Allow credentials
  next();
});
app.use(cookieParser());
app.use(express.json());
app.use(express.static('public'));

mongoose.connect("mongodb+srv://raghuveermustimalla:12112002@cluster0.g7ti9vt.mongodb.net/?retryWrites=true&w=majority").then(() => {
    console.log("DB Connected Suceesfuly")
}).catch(err => {
    console.log(err)
})





const routes = require("./Routes/routes")
app.use("/api/v1", routes)

app.listen(8081, () => {
    console.log("Running");
});
