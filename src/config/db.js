const { Sequelize } = require("sequelize");
require("dotenv").config({ path: process.cwd() + "/config/.env" });

const sequelize = new Sequelize(process.env.DB_URL);

async function dbConnect() {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}

module.exports = {
  sequelize,
  dbConnect,
};
