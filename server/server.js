const express = require('express')
const app = express()
const db = require('./config/connection');

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

app.listen(3001, ()=> {
    console.log('server started on port 3001')
})