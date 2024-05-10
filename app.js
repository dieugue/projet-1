const express = require("express");

const app = express();

app.get("/", (req, res) => {
  return res.send(" Bonjour le gars");
  //done
});
