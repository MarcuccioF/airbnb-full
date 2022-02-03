// Packages
const express = require('express')
const router = express.Router()

// Views
router.post('/', (req, res) => {
  if (req.isAuthenticated()) {
    res.send('Hello from bookingpost')
  } else {
    res.send('you shall not pass')
  }
})
// Export
module.exports = router
