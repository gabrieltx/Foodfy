const express = require('express')
const nunjucks = require('nunjucks')

const server = express()

server.set("view engine", "njk")

server.use(express.static('public'))

nunjucks.configure("views", {
    express: server,
    autoescape: false,
    noCache: true
})

server.get("/", function(req, res) {
    return res.render("index")
})

server.get("/about", function(req, res) {
    return res.render("about")
})

server.get("/recipes", function(req, res) {
    return res.render("recipes")
})

server.get("/detail", function(req, res) {
    return res.render("detail")
})

server.listen(5000, function(){
    console.log("server running")
})
