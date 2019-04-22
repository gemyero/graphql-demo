const Post = require('../models/post');

const posts = async parent => {
  const promises = parent.posts.map(async postId => Post.findById(postId));
  return Promise.all(promises);
}

module.exports = {
  posts
};