const express = require("express");
const app = express();

app.use(express.static("public"));

const port = 3001;

app.get("/", (req, res) => {});

app.get("/home", (req, res) => {
  res.sendFile(__dirname + "/views/home.html");
});

app.get("/works", (req, res) => {
  res.sendFile(__dirname + "/views/works.html");
});
app.get("/about", (req, res) => {
  res.sendFile(__dirname + "/views/about.html");
});

app.get("/gallery", (req, res) => {
  res.sendFile(__dirname + "/views/gallery.html");
});

app.listen(port, () => {});
