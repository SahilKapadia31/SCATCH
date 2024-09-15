const express = require('express');
const app = express()
const connectDB = require('./config/mongoose-connections');
const cookieParser = require('cookie-parser')
const path = require('path')
const expressSession = require('express-session');
const flash = require('connect-flash');

const ownersRouter = require('./routers/ownersRouter');
const usersRouter = require('./routers/usersRouters');
const productsRouter = require('./routers/productsRouter');
const indexRouter = require('./routers/index');

require('dotenv').config();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser)
app.use(express.static(path.join(__dirname, 'public')));
app.use(expressSession({
    resave: false,
    saveUninitialized: false,
    secret: process.env.EXPRESS_SESSION_SECRET,
}))
app.use(flash())

app.set('view engine', 'ejs');

app.use('/', indexRouter)
app.use('/owners', ownersRouter)
app.use('/users', usersRouter)
app.use('/products', productsRouter)

app.listen(3000, (err) => {
    connectDB()
    err ? console.log("Some thing went wrong") : console.log("sever started on http://localhost:3000")
})