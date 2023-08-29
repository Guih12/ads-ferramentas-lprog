const createTableProducts = () => {
  return `CREATE TABLE IF NOT EXISTS products(
        id          serial PRIMARY KEY,
        description VARCHAR(255) NOT NULL
    );`;
};

module.exports = { createTableProducts };
