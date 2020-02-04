const mongoose = require('mongoose');

const foodRecipeSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    title: String,
    creator: String,
    created: String,
    rating: Number,
    incridients: [Object],
    guide: String
})

module.exports = mongoose.model('FoodRecipe', foodRecipeSchema);