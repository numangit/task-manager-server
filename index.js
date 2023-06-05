const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
require('dotenv').config();
const port = process.env.PORT || 5001;
const app = express();

//middleware
app.use(cors());
app.use(express.json());

async function run() {
  try {
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