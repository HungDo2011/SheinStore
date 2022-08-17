const express = require("express");
const { MongoClient } = require("mongodb");
const { getProduct } = require("./modules/productInfo/product.controller");

const url = "mongodb://localhost:27017";
const client = new MongoClient(url);

const dbName = "Shein";

// Use connect method to connect to the server
async function connectMongoDB() {
  await client.connect();
  const db = client.db(dbName);
  const collection = db.collection("product");

  // the following code examples can be pasted here...

  return "done!";
}

async function main() {
  const app = express();
  app.use(express.json());

  connectMongoDB()
    .then(console.log("conected"))
    .catch((err) => {
      console.log({ errMess: `lỗi ${err}` });
    });

  const productInfo = await client
    .db(dbName)
    .collection("product")
    .find({ id: 1 })
    .toArray();

  console.log(productInfo);

  app.get("api/product", async (req, res) => {
    console.log(req.query);
    let query = req.query;
    let filter = {};

    if (query && query.filter) {
      try {
        filter = JSON.parse(query.filter);
      } catch (error) {
        res.status(400).send({ errMess: `lỗi ${error}` });
      }
    }

    getProduct(client, query.feild)
      .then((productInfo) => {
        console.log("product", productInfo);
        res.status(200).send(productInfo);
      })
      .catch((err) => {
        console.log("err", err);
        res.status(400).send({ errMess: `Lỗi ${err}` });
      });
  });

  app.listen(3000);
}

main();
