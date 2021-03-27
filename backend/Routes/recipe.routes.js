let mongoose = require('mongoose'),
  express = require('express'),
  router = express.Router();

// Recipe Model
let recipeSchema = require('../models/Recipe');

// CREATE Recipe
router.route('/create-recipe').post((req, res, next) => {
  recipeSchema.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      console.log(data)
      res.json(data)
    }
  })
});

// READ Recipes
router.route('/').get((req, res) => {
  recipeSchema.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Get Single Recipe
router.route('/edit-recipe/:id').get((req, res) => {
  recipeSchema.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})


// Update Recipe
router.route('/update-recipe/:id').put((req, res, next) => {
  recipeSchema.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      return next(error);
      console.log(error)
    } else {
      res.json(data)
      console.log('Recipe updated successfully !')
    }
  })
})

// Delete Recipe
router.route('/delete-recipe/:id').delete((req, res, next) => {
  recipeSchema.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})

module.exports = router;