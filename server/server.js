const express = require("express");
const path = require("path");

require("dotenv").config({ path: `${__dirname}/config/config.env` });

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.static(path.join(process.cwd(), "client/build")));
app.use(express.urlencoded({ extended: false }), express.json());
app.use("/orders", require("./routes/index"));

app.listen(PORT, () => {
  console.log(`> Server started on port ${PORT}`);
});

console.log(path.join(process.cwd(), "client/build"));
// Route4Me
// Mysql
// Knex
