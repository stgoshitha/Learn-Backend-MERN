const express = require('express')
const app = express()
const port = 3000

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