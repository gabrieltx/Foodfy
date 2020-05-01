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