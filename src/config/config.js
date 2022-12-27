require("dotenv").config({ path: process.cwd() + "/config/.env" });

module.exports = {
  development: {
    url: process.env.DB_URL,
    dialect: "postgres",
  },
};
