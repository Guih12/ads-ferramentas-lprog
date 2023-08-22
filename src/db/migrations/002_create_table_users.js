const createTableUsers = () => {
  return `CREATE TABLE IF NOT EXISTS users(
        id          serial PRIMARY KEY,
        name VARCHAR(255) NOT NULL
    );`;
};
module.exports = { createTableUsers };
