const express = require('express');
const app = express()
const connectDB = require('./config/mongoose-connections');
const cookieParser = require('cookie-parser')
const path = require('path')
const ownersRouter = require('./routers/ownersRouter');
const usersRouter = require('./routers/usersRouters');
const productsRouter = require('./routers/productsRouter');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser)
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');

app.use('/owners', ownersRouter)
app.use('/users', usersRouter)
app.use('/products', productsRouter)

app.listen(8000, (err) => {
    connectDB()
    err ? console.log("Some thing went wrong") : console.log("sever started on http://localhost:8000")
})