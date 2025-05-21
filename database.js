const { DB_URL } = require("./config");
const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

let database;

const mongoConnect = (callback) => {
  MongoClient.connect(DB_URL)
    .then((client) => {
      console.log("Connected to MongoDB!");
      database = client.db("shop");
      callback();
    })
    .catch((error) => console.log("Database connection error:", error));
};

const getDatabase = () => {
  if (!database) {
    throw "No database found!";
  }

  return database;
};

module.exports = { mongoConnect, getDatabase };

