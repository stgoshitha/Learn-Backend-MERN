const express = require('express')
const bodyParser = require('body-parser') 

const app = express()
const port = 3000

// This line configures the app to parse incoming requests with application/x-www-form-urlencoded payloads. This is typically used for form submissions.
app.use(bodyParser.urlencoded({ extended: false }))

//This line configures the app to parse incoming requests with JSON payloads. This is commonly used in APIs where the client sends data in JSON format.
app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.send('Hello World! - Get method')
})

app.post('/', (req, res) => {
    res.send('Hello World! - Post method')
  })

  app.put('/', (req, res) => {
    res.send('Hello World! - Put method')
  })

  app.delete('/', (req, res) => {
    res.send('Hello World! - Delete method')
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})