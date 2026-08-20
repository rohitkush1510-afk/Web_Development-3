const express = require("express");
const app = express();
const users = [
    { id: 1, name: "John Doe", email: "john@example.com" },
    { id: 2, name: "Jane Doe", email: "jane@example.com" },
    { id: 3, name: "Jim Doe", email: "jim@example.com" },
    { id: 4, name: "Jack Doe", email: "jack@example.com" },
];

app.get("/", function(req, res) {
    res.send("Juice pildo mausami ka aoou");
});

app.get("/about", function(req, res) {
    res.send("<h1>Hello from about</h1>");
});

app.get("/users", function(req, res) {
    res.json(users);
});

app.listen(3060 , function(req, res) {
    console.log("Mere pyari baby");
});