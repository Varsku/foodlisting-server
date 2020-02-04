const express= require('express');
const router = express.Router();
const controller = require('./shoppingList-controller')

router.get('/', controller.root);
router.post('/', controller.addList);
router.get('/:listId', controller.getList);
router.patch('/:listId', controller.updateList);
router.delete('/:listId', controller.deleteList);

module.exports = router;