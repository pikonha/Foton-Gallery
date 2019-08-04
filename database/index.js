const fs = require("fs");
const path = require("path");

const mongoose = require("mongoose");

/**
 *  Creates the Mongoose model from Model directory files
 */

const createMongooseModel = (model_name, models_dir) => {
  const model = require(path.resolve(models_dir, model_name));

  const schema = new mongoose.Schema(model);
  return mongoose.model(model_name, schema);
};

const initDB = async (models_dir, DATABASE_URI) => {
  let connection,
    db = {};

  try {
    connection = mongoose
      .connect(DATABASE_URI, { useNewUrlParser: true })
      .catch(error => console.error(error));
  } catch (e) {
    return Promise.reject(e);
  }

  if (connection) {
    try {
      const files = fs.readdirSync(models_dir);

      // Get models name from files in model directory
      files.forEach(file => {
        let name = file.replace(/\.js$/, "");

        db[name] = createMongooseModel(name, models_dir);
      });
    } catch (e) {
      return Promise.reject(e);
    }
  }

  return Promise.resolve(db);
};

module.exports = {
  start: initDB
};
