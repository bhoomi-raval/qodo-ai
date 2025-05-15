const users = require('../models/user');

// get all users
exports.getAllUsers = (req, res) => {
  res.json(users);
};