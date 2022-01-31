// Packages
const express = require('express')
const router = express.Router()

// Views
router.get('/', (req, res) => {
  res.send('Hello from auth')
})

router.get('/login', (req, res) => {
  res.send('Hello from login')
})

router.get('/signup', (req, res) => {
  res.send('Hello from signup')
})

router.post('/login', (req, res) => {
  res.send('Hello from darkness')
})

router.post('/signup', (req, res) => {
  res.send('Hello from here')
})

router.get('/logout', (req, res) => {
  res.send('Hello from logout')
})
// Export
module.exports = router

// POST /signup
// GET /logout
