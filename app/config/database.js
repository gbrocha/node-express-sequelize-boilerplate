const { DATABASE__PASSWORD, DB_HOST, DB_NAME, DB_USER } = process.env;

module.exports = {
  username: DB_USER,
  password: DATABASE__PASSWORD,
  database: DB_NAME,
  host: DB_HOST,
  dialect: "postgres",
  define: {
    timestamps: true
  }
};
