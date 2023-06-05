const express = require('express');
const cors = require('cors');
require('dotenv').config();
const port = process.env.PORT || 5001;
const app = express();

//middleware
app.use(cors());
app.use(express.json());

//import api routes
const tasks = require('./routes/tasks');

async function run() {
  try {
    //tasks
    app.use('/myTasks', tasks);
  }
  finally {
  }
};

run().catch(console.log)

app.get('/', async (req, res) => {
  res.send('Server is running')
});

app.listen(port, () => {
  console.log(`Server running on ${port}`)
});