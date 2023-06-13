const express = require('express');
const path = require('path');

const app = express();

const playersDB = require('./data/players-db')

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))

app.get('/', (req,res)=>{
  res.render('home')
})

app.get('/players', (req,res)=>{
  const players = playersDB.getAll()
  res.render('players-fold/players', {players})
})

app.listen(3000)