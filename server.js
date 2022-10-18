const express = require("express");
const dotenv = require("dotenv");
const { graphqlHTTP } = require("express-graphql");
const { connectDB } = require("./db");
const schema = require("./graphql/schema");
const app = express();

//after config of mongoDB atlas

dotenv.config(); //if other place for env file, then update in ()
connectDB();
app.get("/", (req, res) => {
  res.status(200).send("Hello !!!!");
});

app.use("/graphql", graphqlHTTP({ schema, graphiql: true }));

app.listen(process.env.PORT, () => {
  console.log(`App running on port ${process.env.PORT}`);
});
