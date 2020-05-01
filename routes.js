const express = require('express')
const recipes = require('./controllers/recipes')
const routes = express.Router()

routes.get('/', recipes.index)
routes.get("/about", recipes.about)
routes.get("/recipes", recipes.list)
routes.get("/recipes/:index", recipes.detail)
routes.get("/admin", recipes.admin)

module.exports = routes