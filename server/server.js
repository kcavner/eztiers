require('dotenv').config()

const express = require('express')
const app = express()
const db = require('./config/connection');
const jwt = require('jsonwebtoken')
const routes = require('./routes')
const cors = require('cors'); 

// cors headers to allow requests from backend for get and post
app.use(cors({
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST'],
    credentials: true
  }));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(routes)


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
});


app.listen(3001, ()=> {
    console.log('server started on port 3001')
})