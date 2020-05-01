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
    const recipeIndex = req.params.index;
    const recipe = data.recipes[recipeIndex]
    return res.render("home/detail", {recipe})
}
exports.admin = function(req, res) {
    return res.render("admin/index", {items: data.recipes})
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

    let {image, title, author, ingredients, preparation, information} = req.body

    data.recipes.push({
        image,
        title,
        author,
        ingredients,
        preparation,
        information
    })

    fs.writeFile("data.json", JSON.stringify(data, null, 2), function(err) {
        if (err) return res.send('Write File Error')
        return res.redirect("admin/index", {items: data.recipes})
    })
}