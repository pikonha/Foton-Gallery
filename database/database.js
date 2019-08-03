const mongoose = require("mongoose");

const initDB = () => {
  mongoose
    .connect(process.env.DATABASE_URI, { useNewUrlParser: true })
    .catch(error => console.error(error));

  mongoose.connection.once("open", () => {
    console.log("Connected to database");
  });
};

module.exports = initDB;
