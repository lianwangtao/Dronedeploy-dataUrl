// https://young-meadow-70227.herokuapp.com/
const express = require('express')
const app = express()
const port = 3000
const base64 = require('node-base64-image')

app.get('/', (request, response) => {
  const url = 'http://upload.wikimedia.org/wikipedia/commons/4/4a/Logo_2013_Google.png'
  base64.encode(url, {string: 'true'}, function(response) {
    console.log('dataURL:', response)
  })
  response.send('Hello from Express!')
})

app.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err)
  }

  console.log(`server is listening on ${port}`)
})
