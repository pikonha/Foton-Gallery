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

const initDB = async (models_dir, database_uri) => {
  let connection,
    db = {};

  try {
    connection = mongoose.connect(database_uri, { useNewUrlParser: true });

    if (connection) {
      const files = fs.readdirSync(models_dir);

      // Get models name from files in model directory (e.g. Post)
      files.forEach(file => {
        let name = file.replace(/\.js$/, "");

        db[name] = createMongooseModel(name, models_dir);

        console.info(`Model being loaded: ${name}`);
      });
    }

    return Promise.resolve(db);
  } catch (e) {
    return Promise.reject(e);
  }
};

module.exports = {
  start: initDB
};
