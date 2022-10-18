const express = require("express");
const dotenv = require("dotenv");
const app = express();

//after config of mongoDB atlas
const { connectDB } = require("./db");

dotenv.config(); //if other place for env file, then update in ()
connectDB();
app.get("/", (req, res) => {
  res.status(200).send("Hello !!!!");
});

app.listen(process.env.PORT, () => {
  console.log(`App running on port ${process.env.PORT}`);
});
