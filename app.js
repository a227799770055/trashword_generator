// setting parameter
const express = require('express')
const app = express()
const exphbs = require('express-handlebars')
const bodyParse = require('body-parser')
const trashWords = require('./trashword_generator.js')
const port = 3000

app.use(bodyParse.urlencoded({ extend: true }))
// setting template engine
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

// setting routing
app.get('/', (req, res) => {
  res.render('index')
})

app.post('/', (req, res) => {
  console.log(req.body)
  trashwords = trashWords(req.body['profession'])
  res.render('index', { trashwords: trashwords })
})


// server listening 
app.listen(port, () => {
  console.log('the server is listening')
})