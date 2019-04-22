const { GraphQLServer } = require('graphql-yoga');
const mongoose = require('mongoose');
const path = require('path');

const resolvers = require('./resolvers');

// connect to mongodb
mongoose.connect('mongodb://localhost:27017/graphql-demo', { useNewUrlParser: true })
  .then(() => console.log('Connected to MongoDB...'))
  .catch(err => console.error('Failed to connect to MongoDB', err));

const server = new GraphQLServer({
  typeDefs: path.resolve(__dirname, 'schema.graphql'),
  resolvers
});

server.start({
  port: 3000,
}, () => console.log('Server starts listening on http://localhost:3000'));