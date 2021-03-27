const mongoose = require('mongoose')
const Schema = mongoose.Schema

const RecipeSchema = new Schema({
    title: {
        type: String,
        unique: true,
    },
    image: {
        type: String,
    },
    type: {
        type: String,
    },
    duration: {
        type: Number,
    },
    difficulty: {
        type: String,
    },
    quantity: {
        type: Number,
    },
    ingredients: {
        type: Array,
        default: []
    },
    instructions: {
        type: Array,
        default: []
    },
})

module.exports = mongoose.model('Recipe', RecipeSchema)