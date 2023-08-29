const { Client } = require("pg");

class Postgres {
  constructor() {
    this.client = new Client({
      connectionString: process.env.DATABASE_URL,
    });
  }

  async connect() {
    try {
      await this.client.connect();
    } catch (error) {
      console.error(err);
    }
  }

  async query(sql, values = []) {
    try {
      const result = await this.client.query(sql, values);
      return result.rows;
    } catch (error) {
      return [];
    }
  }

  async disconnect() {
    try {
      await this.client.end();
      console.log("Disconnected from database");
    } catch (error) {
      console.error("Error disconnecting from database:", error);
    }
  }
}

module.exports = Postgres;
