const Postgres = require("./postgres");

class Database {
  static create(databaseName) {
    const databases = {
      postgres: new Postgres(),
    };
    return databases[databaseName];
  }
}

module.exports = Database;
