require('dotenv').config()

const express = require('express')
const app = express()
const db = require('./config/connection');
const jwt = require('jsonwebtoken')
const routes = require('./routes')
const cors = require('cors'); 

app.use(cors({
    origin: 'http://localhost:3000', // Replace with the URL of your frontend
    methods: ['GET', 'POST'], // Allow the methods you're using
    credentials: true // Allow cookies and other credentials
  }));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(routes)


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

// app.post('/login', (req,res)=>{
//     const username = req.body.username
//     const user = {name:username}

//     const accessToken = jwt.sign(user,
//     process.env.ACCESS_TOKEN_SECRET)
//     res.json({accessToken: accessToken})
// })

// function authenticateToken(req,res,next){
//     const authHeader =req.headers['authorization']
//     const token = authHeader && authHeader.split(' ')[1]
//     if (token == null) return res.sendStatus(401)

//     jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user)=>{
//         if (err) return res.sendStatus(403)
//         req.user = user
//         next()
//     })
// }

app.listen(3001, ()=> {
    console.log('server started on port 3001')
})