const mongoose = require("mongoose");
require("dotenv").config();
mongoose.connect(
  "mongodb+srv://Jenry:Jenry560@cluster0.tkoex7w.mongodb.net/contable?retryWrites=true&w=majority"
);

const objetodb = mongoose.connection;

objetodb.on("connected", () => {
  console.log("Base de dato conectada");
});
objetodb.on("error", () => {
  console.log("error");
});

module.exports = mongoose;
