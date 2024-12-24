//const express = require("exptrss");
import express from "express";

const app = express();
const PORT = 5111;

app.all("/", (req, res) => {
  console.log("request", req);
  console.log("response", res);
  res.json("I am up and running!!, Your Ist Express JS!!!");
});

app.all("/users", (req, res) => {
  console.log("request", req);
  console.log("response", res);
  var resultData = {
    foo: "bar",
    check: "i am runnning!!!",
  };
  res.json(resultData);
});

app.listen(PORT, () => {
  console.log(`Server is runing at ${PORT}`);
});
