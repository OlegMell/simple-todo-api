const path = require('path');

require('dotenv').config({
    path: path.join(__dirname, 'config', '.env'),
});

const express = require('express')
const todoRouter = require('./routes/index')
const cors = require('cors');
const connect = require('./db/connection')

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors())

app.use('/', todoRouter)

app.listen(process.env.PORT || 3000,
    () => {
        connect().then(res => {
        })
        console.log(`server work at http://localhost:${process.env.PORT || 3000}`)
    })
