const express = require('express');
const router = express.Router()
const math = require('mathjs');


router.get('/monthly', (req, res) =>{
  let P; //monthly mortgage payment
  let l = 400000; //principle / initial amount borrowed
  let c = 3.5 / 100 / 12; //monthly interest rate
  let n = 30 * 12; //number of payments months

  P =  l * c * (math.pow(1 + c, n)) / (math.pow(1 + c, n) - 1)
  console.log(P)
})

router.get('/balance', (req, res) =>{
  let B
  let L = 100000
  let C = 3.5/100/12
  let N = 15 * 12
  let P = 449

  B = L *( math.pow((1 + C), N)) - math.pow((1 + C), P) / math.pow((1 + C), N) -1
  console.log(B)
})








module.exports = router
