const express = require('express');
const router = express.Router()
const math = require('mathjs');


router.get('/', (req, res) =>{
  res.send('Ivest')
})

router.get('/capitalgains', (req, res) =>{
  let initialPrice = 100
  let priceAfter = 250

  let gained = (priceAfter - initialPrice) / initialPrice
  console.log(`${gained * 100}%`)

})








module.exports = router
