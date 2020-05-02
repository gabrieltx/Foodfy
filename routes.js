const express = require('express')
const recipes = require('./controllers/recipes')
const routes = express.Router()

routes.get('/', recipes.index)
routes.get("/about", recipes.about)
routes.get("/recipes", recipes.list)
routes.get("/recipes/:id", recipes.detail)

routes.get("/admin/recipes", recipes.admin)
routes.get("/admin/recipes/create", recipes.create)
routes.post("/admin/recipes", recipes.post)
routes.get("/admin/recipes/:id", recipes.show)
routes.get("/admin/recipes/:id/edit", recipes.edit)
routes.put("/admin/recipes", recipes.put)
routes.delete("/admin/recipes", recipes.delete)

module.exports = routes