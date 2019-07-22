require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000

const route = require('./routes')
const mongoose = require('mongoose')
const cors = require('cors')

app.use(cors())
app.use(express.urlencoded({ extended:false }))
app.use(express.json())

mongoose.connect('mongodb://localhost/miniWP-Vue', {useNewUrlParser : true}, (err) => {
    if(err) console.log('mongoose connection failed');
    else console.log('mongoose connection success');
});

app.use('/', route)

app.listen(port, () => {
    console.log(`listening on port ${port}`)
})