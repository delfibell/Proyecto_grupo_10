module.exports = {
  development: {
    username: "root",
    password: "root",
    database: "oftDB",
    host: "127.0.0.1",
    dialect: "mysql",
    port: "8889",
  },
  test: {
    username: "root",
    password: null,
    database: "oftDB",
    host: "127.0.0.1",
    dialect: "mysql",
  },
  production: {
    username: "root",
    password: null,
    database: "oftDB",
    host: "127.0.0.1",
    dialect: "mysql",
  },
};
