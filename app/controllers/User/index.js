const { User } = require("../../models");

class UserController {
  async index(req, res) {
    const users = await User.findAll();
    return res.json(users);
  }
}

module.exports = new UserController();
