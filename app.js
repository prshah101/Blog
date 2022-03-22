const express = require("express")
const app = express()
const port = 3000

app.get("/", function(req,res){
res.send("Working")
})

app.listen(process.env.PORT || port, () => { //listen to whatever port is avilable on heroku
    console.log(`Example app listening on port ${port}`)
  })