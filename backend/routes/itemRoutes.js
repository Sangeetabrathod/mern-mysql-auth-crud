const express = require('express');
const auth = require('../middleware/auth');
const {
  getItems,
  getItem,
  createItem,
  updateItem,
  deleteItem,
  getStats
} = require('../controllers/itemController');

const router = express.Router();

router.use(auth); // All routes protected

router.get('/', getItems);
router.get('/stats', getStats);
router.get('/:id', getItem);
router.post('/', createItem);
router.put('/:id', updateItem);
router.delete('/:id', deleteItem);

module.exports = router;

