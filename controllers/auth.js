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

router.post('/login', async (req, res, next) => {
  try {
    let user = await Users.findOne({
      email: req.body.email,
      password: req.body.password
    })
    console.log(user)
    if (user) {
      req.login(user, err => {
        if (err) {
          throw err
        } else {
          res.redirect('/houses')
        }
      })
    } else {
      throw new Error('User not found')
    }
  } catch (err) {
    next(err)
  }
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

router.get('/logout', (req, res, next) => {
  console.log('loggin out')
  req.logout()
  req.session.destroy(err => {
    if (err) {
      next(err)
    }
    res.clearCookie('connect.sid')
    // continue coding here
    res.redirect('login')
  })
})
// Export
module.exports = router

// POST /signup
// GET /logout
