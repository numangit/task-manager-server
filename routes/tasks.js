const { ObjectId } = require('mongodb');
const express = require("express");
const { tasksCollection } = require('../collections/dbCollections');
const route = express.Router();

//api to get tasks by user email
route.get('/', async (req, res) => {
  let query = {};
  if (req.query.email) {
    query = {
      userEmail: req.query.email
    }
  }
  const cursor = tasksCollection.find(query).sort({ postedDate: -1 });
  const tasks = await cursor.toArray();
  res.send(tasks);
});

module.exports = route;