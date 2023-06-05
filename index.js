const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
require('dotenv').config();
const port = process.env.PORT || 5001;
const app = express();

//middleware
app.use(cors());
app.use(express.json());

//connection with mongodb
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.zbie1as.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

async function run() {
  try {
    //database collections
    const tasksCollection = client.db('MCS-task-manager').collection('tasks');
  }
  finally {
  }
}

run().catch(console.log)

app.get('/', async (req, res) => {
  res.send('Server is running')
});

app.listen(port, () => {
  console.log(`Server running on ${port}`)
});