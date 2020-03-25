const { User } = require("../models");
const Controller = require("./Controller");

class UserController extends Controller {
  async index(req, res) {
    const users = await User.findAll();
    return res.json(users);
  }
}

module.exports = new UserController();
