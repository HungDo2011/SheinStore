const { User } = require("../model/model");

const userController = {
  //Get all user
  getAllUser: async (req, res) => {
    try {
      const user = await User.find();
      res.status(200).json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  //Get an user
  getAnUser: async (req, res) => {
    try {
      const user = await User.findById(req.params.id);
      const { password, ...other } = user._doc;
      res.status(200).json({ ...other });
    } catch (err) {
      res.status(500).json(err);
    }
  },

  //Delete user
  deleteUser: async (req, res) => {
    try {
      const user = await User.findById(req.params.id);
      res.status(200).json("Delete successfully!");
    } catch (err) {
      res.status(500).json(err);
    }
  },
};

module.exports = userController;
