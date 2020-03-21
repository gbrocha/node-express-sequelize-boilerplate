require("dotenv/config");
const Express = require("express");
const server = new Express();
const router = require("./routes");
const { API_PORT } = process.env;
const { connect } = require("./database/index");

connect().then(() => {
  server.use(router);

  server.listen(API_PORT || 3333);
  console.log(`listening ${API_PORT || 3333}`);
});
