const express = require('express');
const ehbs = require('express-handlebars')
const app = express()
const connect = require('./models/db')

const PORT = 3030

connect()

const hbs = ehbs.create()

app.use(express.json())
app.use(express.urlencoded({extended:true}));

app.engine('handlebars', hbs.engine)
app.set('view engine', 'handlebars')
app.set('views', './views')

app.use('/', require('./controllers/router'));


app.listen(PORT, () => console.log(`server has been initiated ${PORT}`))