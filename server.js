const express = require('express')
const nunjucks = require('nunjucks')

const server = express()
const recipes = require("./data")

server.set("view engine", "njk")

server.use(express.static('public'))

nunjucks.configure("views", {
    express: server,
    autoescape: false,
    noCache: true
})


server.get("/", function(req, res) {
    return res.render("home/index", { items: recipes})
})

server.get("/about", function(req, res) {
    return res.render("home/about")
})

server.get("/recipes", function(req, res) {
    return res.render("home/recipes", {items: recipes})
})

server.get("/recipes/:index", function (req, res) {
    const recipeIndex = req.params.index;
    const recipe = recipes[recipeIndex]
    return res.render("home/detail", {recipe})
})

server.use(function (req, res) {
    res.status(404).render('not-found')
})

server.listen(5000, function(){
    console.log("server running")
})
