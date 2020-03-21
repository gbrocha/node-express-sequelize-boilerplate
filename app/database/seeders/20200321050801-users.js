const { v4: uuid } = require("uuid");

module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.bulkInsert("Users", [
      {
        id: uuid(),
        name: "Tuquinha da Padaria",
        email: "tuquinha@padaria.com",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: uuid(),
        name: "Seu Juca",
        email: "seu.juca@esquina.com.br",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]),

  down: queryInterface => queryInterface.bulkDelete("Users", null, {})
};
