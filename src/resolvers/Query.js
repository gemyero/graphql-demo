const User = require('../models/user');
const Post = require('../models/post');

const listUsers = async () => {
  const users = await User.find({});
  return users;
};

const listPosts = async () => {
  const posts = await Post.find({});
  return posts;
};

const getUser = (_, { id }) => User.findById(id);

const getPost = (_, { id }) => Post.findById(id);

module.exports = {
  listUsers,
  listPosts,
  getUser,
  getPost
};