const User = require('../models/user');
const Post = require('../models/post');

const createUser = async (_, args) => {
  const user = new User({
    ...args.user
  });

  try {
    await user.save();
    return user;
  } catch (error) {
    return error;
  }
};

const createPost = async (_, args) => {
  const post = new Post({
    ...args.post
  });

  try {
    await post.save();

    await User.update({ _id: args.post.user }, {
      $push: { posts: post.id }
    });

    return post;
  } catch (err) {
    return error;
  }
}

module.exports = {
  createUser,
  createPost
};