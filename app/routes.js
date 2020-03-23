const Express = require("express");
const User = require("./controllers/User");

const router = Express.Router();

router.get("/users", User.index);

module.exports = router;
