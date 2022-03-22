const express = require('express')
const app = express()
const port = 3000

app.use(express.urlencoded({ extended: true }));
app.engine("html", require("ejs").renderFile);
app.set("view engine", "html");
app.use(express.static('css'));

let viewsPath = __dirname + "/pages/";

app.get("/", (req, res) => {
    let fileName = viewsPath + "index.html";
    res.sendFile(fileName);
});

app.get("/blog", (req, res) => {
  let fileName = viewsPath + "/blog/blogposts.html";
  res.sendFile(fileName);
});

app.get("/UniTips", (req, res) => {
  let fileName = viewsPath + "/blog/unitips.html";
  res.sendFile(fileName);
});

app.get("/motorbike", (req, res) => {
  let fileName = viewsPath + "/blog/motorbike.html";
  res.sendFile(fileName);
});


app.get("*", (req, res) => {
  let fileName = viewsPath + "404.html";
  res.sendFile(fileName);
});

app.listen(process.env.PORT || port, () => { //listen to whatever port is avilable on heroku
  console.log(`Example app listening on port ${port}`)
})