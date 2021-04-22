//Require path and Express
const router = require('express').Router();
const path = require('path');

// Router get all routes.
router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});
// Router get routes from exercise.
router.get('/exercise', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/exercise.html'));
});
// Router get routes from stats.
router.get('/stats', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/stats.html'));
});

module.exports = router;
