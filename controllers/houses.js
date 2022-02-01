// Packages
const express = require('express')
const router = express.Router()

// Views
router.get('/', (req, res) => {
  res.render('./houses/list')
})

router.post('/', (req, res) => {
  res.send('Hello from housePost')
})

router.get('/create', (req, res) => {
  res.send('Hello from get/create houses')
})

router.get('/:id', (req, res) => {
  res.send('Hello from /:id')
})

router.get('/:id/edit', (req, res) => {
  res.send('Hello from /:id/edit')
})

router.patch('/:id', (req, res) => {
  res.send('hello from patch id')
})

router.delete('/:id', (req, res) => {
  res.send('hello from delete id')
})
// Export
module.exports = router
