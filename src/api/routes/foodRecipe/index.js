const express= require('express');
const router = express.Router();
const controller = require('./foodRecipe-controller');

router.get('/', controller.root);
router.post('/', controller.postRecipe);
router.get('/:foodId',controller.getRecipe);
router.patch('/:foodId', controller.updateRecipe);
router.delete('/:foodId', controller.deleteRecipe);

module.exports = router;