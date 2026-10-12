require('dotenv').config()
const express = require('express');
const app = express();
const env = require('./config/env')
const PORT = env.server.port;

app.listen(PORT, ()=> {
    console.log(`server running on port ${PORT}...`)
})