const express = require("express");
const path = require("path");

require("dotenv").config({ path: `${__dirname}/config/config.env` });

const app = express();
const PORT = process.env.PORT || 5000;

if (process.env.NODE_ENV === "production") {
  app.use(express.static("build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(process.cwd(), "client/build", "index.html"));
  });
}
app.use(express.urlencoded({ extended: false }), express.json());
app.use("/orders", require("./routes/index"));

app.listen(PORT, () => {
  console.log("> Server started on port 5000");
});

// Route4Me
// Mysql
// Knex
