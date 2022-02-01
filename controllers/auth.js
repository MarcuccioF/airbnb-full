// Packages
const express = require('express')
const router = express.Router()

//models
const Users = require('../models/users')
// Views

router.get('/login', (req, res) => {
  res.render('login')
})

router.get('/signup', (req, res) => {
  res.render('signup')
})

router.post('/login', (req, res) => {
  res.send('Hello from darkness')
})

router.post('/signup', async (req, res, next) => {
  try {
    let UserExist = await Users.findOne({ email: req.body.email })
    if (UserExist) {
      throw new Error('Email just exists')
    } else {
      console.log(req.body)
      let userJustCreated = await Users.create(req.body)
      console.log(req.body)
      req.login(userJustCreated, err => {
        if (err) {
          throw err
        } else {
          res.redirect('/houses')
        }
      })
    }
  } catch (err) {
    next(err)
  }
})

router.get('/logout', (req, res) => {
  res.send('Hello from logout')
})
// Export
module.exports = router

// POST /signup
// GET /logout
