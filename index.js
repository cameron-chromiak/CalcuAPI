const express = require('express');
const math = require('mathjs');
const path = require('path');

const mortgage = require('./routes/mortgage')
const investments = require('./routes/invest')


const app = express()


app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));


app.get('/', (req, res) =>{
  res.render('index')
})


app.use('/mortgage', mortgage)
app.use('/investments', investments)


const PORT = 5000
app.listen(PORT, () =>{
  console.log(`App running on port ${PORT}`);
})
