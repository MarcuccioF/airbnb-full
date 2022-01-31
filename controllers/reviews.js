// Packages
const express = require('express')
const router = express.Router()

// Views
router.post('/', (req, res) => {
  res.send('Hello from reviews')
})
// Export
module.exports = router
