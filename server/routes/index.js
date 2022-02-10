const { knex } = require("../config/db");
const express = require("express");
const Router = express.Router();

Router.get("/", async (req, res) => {
  const orders = await knex
    .select("id", "ig_name", "cost", "location", "contact", "items")
    .from("orders");

  console.log(orders);
});

module.exports = Router;
