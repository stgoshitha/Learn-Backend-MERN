const express = require('express')
const bodyParser = require('body-parser')
const {MongoClient, ObjectId} = require('mongodb') 

const app = express()
const port = 3000

// This line configures the app to parse incoming requests with application/x-www-form-urlencoded payloads. This is typically used for form submissions.
app.use(bodyParser.urlencoded({ extended: false }))

//This line configures the app to parse incoming requests with JSON payloads. This is commonly used in APIs where the client sends data in JSON format.
app.use(bodyParser.json())

//Connection URL
const url = 'mongodb://127.0.0.1:27017'
const client = new MongoClient(url)

//Database Name
const dbName = 'Project';

client.connect();
console.log("Connected successfully to server");
const db = client.db(dbName);
const collection = db.collection('phone');

// Create and GET
app.get('/', async(req, res) => {
  const findResult = await collection.find({}).toArray();
  res.send(findResult);
  //res.send('Hello World! - Get method');
})

// Create and POST
app.post('/', async(req, res) => {
  const insertResult = await collection.insertOne(req.body);
  res.send(insertResult);
  //res.send('Hello World! - Post method');
})

// Update and PUT
app.put('/:id', async(req, res) => {
  const updateResult = await collection.updateOne({ _id: new ObjectId(req.params.id) }, {$set: req.body});
  res.send(updateResult);
  //res.send('Hello World! - Put method');
})

// Delete and DELETE
app.delete('/:id', async(req, res) => {
  const deleteResult = await collection.deleteOne({_id : new ObjectId(req.params.id)});
  res.send(deleteResult);
  //res.send('Hello World! - Delete method');
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})