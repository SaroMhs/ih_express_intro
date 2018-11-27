const express = require('express')
const app     = express()
const hbs     = require('hbs') 
const path = require('path')

var user={name:''}

const bodyParser= require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.get('/', function (req, res) {
  res.render('index', {user})
})

app.get('/profile/:name', function (req, res) {
  console.log(req.params.name)
  res.render('index')
})

app.get('/search', function (req, res) {
  console.log("search", req.query)
  user.name=req.query.name
  res.render('index')
})

app.post('/search', function (req, res) {
  req.body.name=req.body.name.toUpperCase()
  if (req.body.name){
    next()
  } else {
    res.render("index", {user:{name:"user par défaut"}})
  }
  },
  function (req,res){
    console.log("search", req.body)
    user.name=req.body.name
    res.render('index')
  }
)

app.listen(3000, () => console.log('Example app listening on port 3000!'))