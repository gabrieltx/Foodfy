const fs = require('fs')
const data = require('../data.json')

exports.index = function(req, res) {
    return res.render('home/index', {items: data.recipes})
}
exports.about = function(req, res) {
    return res.render("home/about")
}
exports.list = function(req, res) {
    return res.render("home/recipes", {items: data.recipes})
}
exports.detail = function (req, res) {
    const { id } = req.params

    const foundRecipe = data.recipes.find(function (recipe) {
        return recipe.id == id
    })

    if (!foundRecipe) return res.send('Recipe not found!')

    const recipe = foundRecipe

    return res.render("home/detail", {recipe})
}
exports.admin = function(req, res) {
    const index = req.params.index
    return res.render("admin/index", {items: data.recipes, index})
}
exports.create = function(req, res) {
    return res.render('admin/create')
}
exports.post = function(req, res) {

    const keys = Object.keys(req.body)
    for (key of keys) {
        if (req.body[key] == "")
            return res.send("Please fill all fields")
    }

    let id = 1;
    if (data.recipes.length > 0)
    id = data.recipes[data.recipes.length - 1].id + 1


    let {image, title, author, ingredients, preparation, information} = req.body

    data.recipes.push({
        id: Number(id),
        image,
        title,
        author,
        ingredients,
        preparation,
        information
    })

    fs.writeFile("data.json", JSON.stringify(data, null, 2), function(err) {
        if (err) return res.send('Write File Error')
        return res.redirect("/admin/recipes")
    })
}
exports.show = function(req, res) {
    const { id } = req.params

    const foundRecipe = data.recipes.find(function (recipe) {
        return recipe.id == id
    })

    if (!foundRecipe) return res.send('Recipe not found!')

    const recipe = foundRecipe

    return res.render("admin/show", {recipe})
}
exports.edit = function(req, res) {
    const { id } = req.params

    const foundRecipe = data.recipes.find(function (recipe) {
        return recipe.id == id
    })

    if (!foundRecipe) return res.send('Recipe not found!')

    const recipe = foundRecipe

    return res.render('admin/edit', {recipe})
}
exports.put = function(req, res) {
    const { id } = req.body
    let index = 0

    const foundRecipe = data.recipes.find(function (recipe, foundIndex) {
        if (id == recipe.id) {
            index = foundIndex
            return true
        }
    })

    if (!foundRecipe) return res.send('Recipe not found!')

    const recipe = {
        ...foundRecipe,
        ...req.body,
        id: Number(req.body.id)
    }

    data.recipes[index] = recipe

    fs.writeFile("data.json", JSON.stringify(data, null, 2), function(err){
        if(err) return res.send("Write Error!")
        
        return res.redirect(`/admin/recipes/${id}`)
    })
}
exports.delete = function(req, res) {
    const {id} = req.body
    const filteredRecipes = data.recipes.filter(function(recipe){
        return recipe.id != id
    })

    data.recipes = filteredRecipes

    fs.writeFile("data.json", JSON.stringify(data, null, 2), function(err){
        if (err) return res.send("Write file error")

        return res.redirect("/admin/recipes")
    })
}

