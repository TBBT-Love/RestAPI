//const express = require("exptrss");
import express from "express";
import bodyparser from "body-parser";

const app = express();
app.use(bodyparser.json());
const PORT = 5111;

app.all("/", (req, res) => {
  console.log("request", req);
  console.log("response", res);
  res.json("I am up and running!!, Your Ist Express JS!!!");
});

const userList = [
  {
    id: 1,
    name: "Joe",
    Age: 25,
  },
  {
    id: 2,
    name: "Tim",
    Age: 35,
  },
  {
    id: 3,
    name: "Harry",
    Age: 45,
  },
];

app.post("/users", (req, res) => {
  const newUser = req.body;
  console.log(newUser);
  userList.push(newUser);
  res.json({
    status: "new user added!!",
  });
});
//read
app.get("/getUser/:id", (req, res) => {
  let results = userList.filter((user) => user.id == req.params.id);
  console.log(results);
  res.json({
    status: "user found!!!!",
    userList: results,
  });
});

//update user details

app.put("/updateUser/:id", (req, res) => {
  let newUserData = req.body;
  let userIndex = userList.findIndex((user) => user.id == req.params.id);
  if (userIndex >= 0) {
    // if found
    userList[userIndex] = {
      id: req.params.id,
      ...newUserData,
    };
  }

  res.json({
    status: userIndex >= 0 ? "user updated!!" : "user not found!!!!",
    userList: userList,
  });
});

//get all list
app.all("/getusers", (req, res) => {
  console.log("request", req);
  console.log("response", res);
  res.json(userList);
});

//Delete user
app.delete("/deleteUser/:id", (req, res) => {
  let findUserIndex = userList.findIndex((user) => user.id == req.params.id);
  if (findUserIndex >= 0) {
    userList.splice(findUserIndex, 1);
  }
  res.json({
    status: "User deleted successfully!!!",
    userList: userList,
    findUserIndex: findUserIndex,
  });
});

//create

app.listen(PORT, () => {
  console.log(`Server is runing at ${PORT}`);
});
