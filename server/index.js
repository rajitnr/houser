const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const massive = require("massive");
require("dotenv").config();

const bc = require("./controller.js");

const app = express();
massive(process.env.CONNECTION_STRING).then(dbInstance => {
  app.set("db", dbInstance);
  //   dbInstance.insert_one().then(response => console.log({ response }));
  dbInstance.read_houses().then(response => console.log("response", response));
  //   console.log("Table created");
});

app.use(bodyParser.json());
app.use(cors());

app.get("/api/houses", bc.readHouses);
app.post("/api/houses", bc.createHouse);
app.delete("/api/houses/:id", bc.deleteHouse);

app.listen(3005, () => {
  console.log("Server is listening on port 3005");
});
