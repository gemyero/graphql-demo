const User = require('../models/user');

const user = parent => User.findById(parent.user);

module.exports = {
  user
};