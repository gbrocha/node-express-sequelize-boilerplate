const fs = require("fs");
const path = require("path");

let controllers = Object.create({});

fs.readdirSync(__dirname)
  .filter(
    file =>
      file.indexOf(".") !== 0 &&
      file !== path.basename(__filename) &&
      file.slice(-3) === ".js"
  )
  .forEach(file => {
    const controller = require(path.join(__dirname, file));

    Object.assign(controllers, { [file.split(".js")[0]]: controller });
  });

module.exports = controllers;
