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

//api to get specific task by id
route.get('/:id', async (req, res) => {
  const id = req.params.id;
  const query = { _id: ObjectId(id) };
  const task = await tasksCollection.findOne(query);
  res.send(task);
});

//api to add tasks data 
route.post('/', async (req, res) => {
  const task = req.body;
  const result = await tasksCollection.insertOne(task);
  res.send(result);
});

//api to add the completed field on task
route.put('/completed/:id', async (req, res) => {
  const id = req.params.id;
  const query = { _id: ObjectId(id) };
  const options = { upsert: true };
  const updatedDoc = {
    $set: {
      completed: true
    }
  };
  const result = await tasksCollection.updateOne(query, updatedDoc, options);
  res.send(result);
});

//api to add comment/note to a task
route.patch('/note/:id', async (req, res) => {
  const id = req.params.id;
  const taskNote = req.body.taskNote;
  const query = { _id: ObjectId(id) }
  const updatedDoc = {
    $set: {
      taskNote: taskNote
    }
  }
  const result = await tasksCollection.updateOne(query, updatedDoc);
  res.send(result);
});

//api to update the task
route.patch('/:id', async (req, res) => {
  const id = req.params.id;
  const taskName = req.body.taskName
  const taskDescription = req.body.taskDescription
  const query = { _id: ObjectId(id) }
  const updatedDoc = {
    $set: {
      taskName: taskName,
      taskDescription: taskDescription
    }
  }
  const result = await tasksCollection.updateOne(query, updatedDoc);
  res.send(result);
});

//api to delete task
route.delete('/:id', async (req, res) => {
  const id = req.params.id;
  const query = { _id: ObjectId(id) };
  const result = await tasksCollection.deleteOne(query);
  res.send(result);
});

module.exports = route;