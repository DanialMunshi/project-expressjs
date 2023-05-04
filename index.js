// const express = require('express')
// const app = express()

// app.get('/', function (req, res) {
//   res.send('Hello World')
// })

// app.listen(3000, () => {
//     console.log("this is express js");
// })

// app.get('/about', function (req, res) {
//     res.send('this is about')
//   })

//   app.get('/contact', function (req, res) {
//     res.send('this is contact')
//   })

//   app.get('/service', function (req, res) {
//     res.send('this is service')
//   })

const express = require("express")
const app = express()
const port = 8080
const path = require("path")

const mainPath = path.join(__dirname, "./public")

app.use(express.static(mainPath))
app.get("/", (req, res) => {
  res.send("Hello")
})

app.listen(port, ()=>{
  console.log("server is running");
})