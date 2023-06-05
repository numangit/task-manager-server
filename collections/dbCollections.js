const { client } = require('../database/mongodb.config');

//database collections
const tasksCollection = client.db('MCS-task-manager').collection('tasks');

module.exports = {
  tasksCollection
};