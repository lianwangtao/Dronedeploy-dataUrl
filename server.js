// https://young-meadow-70227.herokuapp.com/
var express = require('express')
var base64 = require('node-base64-image')
var bodyParser = require('body-parser')

const PORT = process.env.port || 3000
const app = express()

app.use(bodyParser.json())

app.all('/', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "X-Requested-With")
  next()
})

app.post('/', (req, res) => {
  const url = req.body.imageUrl
  var base64Image = new Buffer(url, 'binary').toString('base64')
  var result = 'data:image/jpeg;base64,' + base64Image
  res.status(200).send(result)
})

app.listen(PORT, (err) => {
  if (err) {
    return console.log('something bad happened', err)
  }
  console.log(`server is listening on ${PORT}`)
})
