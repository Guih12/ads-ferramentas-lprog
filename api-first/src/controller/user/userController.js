const { users } = require("../../data/usersData");

class UserController {
  async getAll(req, res) {
    return await res.json(users);
  }
}

module.exports = UserController;
