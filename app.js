const express = require('express');
const app = express()

const cookieParser = require('cookie-parser')
const path = require('path')

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser)
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');

app.listen(8000, (err) => {
    err ? console.log("Some thing went wrong") : console.log("sever started on http://localhost:8000")
})