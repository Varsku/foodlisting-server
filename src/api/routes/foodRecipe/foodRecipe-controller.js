const mongoose = require('mongoose');
const FoodRecipe = require('../../models/foodRecipe')

exports.root = (req, res, next) => {
    FoodRecipe
    .find()
    .then(result => {
        res.status(200).json(result);
    }).catch(error => {
        res.status(500).json({
            message: 'Could not load recipes',
            info: error.message
        });
    })
}

exports.postRecipe = (req, res, next) => {
    const foodRecipe = new FoodRecipe({
        _id: new mongoose.Types.ObjectId(),
        title: req.body.title,
        creator: req.body.creator,
        created: req.body.created,
        rating: req.body.rating,
        incridients: req.body.incridients,
        guide: req.body.guide
    });
    foodRecipe
    .save()
    .then(result => {
        res.status(201).json({
            message: 'Food recipe created succesfully!',
            created: foodRecipe.title
        });
    }).catch(error => {
        res.status(500).json({
            message: 'Adding foodrecipe failed',
            info: error.message
        })
    })
}

exports.getRecipe = (req, res, next) => {
    const id = req.params.foodId;
    FoodRecipe.findById(id)
    .exec()
    .then(recipe => {
        console.log('FOUND RECIPE', recipe)
        res.status(200).json(recipe)
    }).catch(error => {
        res.status(404).json({
            message: 'Recipe not found with ' + id,
            info: error.message
        })
    })
}

exports.updateRecipe = (req, res, next) => {
    res.status(200).json({
        message: 'Updated foodRecipie',
        id: req.params.foodId
    })
}

exports.deleteRecipe = (req, res, next) => {
    const id = req.body.foodId;
    FoodRecipe.remove({ _id: id })
    .exec()
    .then(result => {
        res.status(200).json(result);
    })
    .catch(error => {
        res.status(500).json({
            message: 'Deleting the recipe failed',
            info: error
        })
    })
}