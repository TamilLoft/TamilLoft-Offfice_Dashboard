const mongodb = require("mongoose");
const mongoClient = mongodb.MongoClient;
const url = " mongodb://127.0.0.1:27017/tamilLoft-Dashbord";
let dataBase;
const ObjectId = mongodb.ObjectId;

async function getDataBase() {

  const client = await mongoClient.connect(url);
  dataBase = client.db("TamilLoft-Dashboard");
  if (!dataBase) {
    console.log("db not connected");
  }
  return dataBase;
}
module.exports = {
  getDataBase, ObjectId
};
