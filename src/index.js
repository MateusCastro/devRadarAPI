const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");

const app = express();

mongoose.connect(
  "mongodb+srv://week10:week10@cluster0-yq0m5.mongodb.net/week10?retryWrites=true&w=majority"
);

app.use(express.json());
app.use(routes);

app.listen(3333);
