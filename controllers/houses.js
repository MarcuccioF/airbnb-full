// Packages
const express = require('express')
const router = express.Router()

const Houses = require('../models/houses')

// Views
router.get('/', (req, res) => {
  //  console.log(req.user)
  res.render('./houses/list', {
    user: req.user
  })
})

router.post('/', async (req, res, next) => {
  try {
    if (!req.isAuthenticated()) {
      res.redirect('/auth/login')
    } else {
      req.body.host = req.user._id
      console.log(req.body)
      let houseJustCreated = await Houses.create(req.body)
      res.redirect(`/houses/${houseJustCreated._id}`)
    }
  } catch (err) {
    next(err)
  }
})

router.get('/create', (req, res) => {
  if (!req.isAuthenticated()) {
    res.redirect('/auth/login')
  } else {
    res.render('houses/create', {
      user: req.user
    })
  }
})

router.get('/:id', async (req, res, next) => {
  try {
    let house = await Houses.findById(req.params.id).populate('host')
    res.render('houses/one', { house })
  } catch (err) {
    next(err)
  }
  //find the house - da fare tutto il pezzo sotto
  // console.log(req.params.id)
  // req.params.id
  // let houses = Houses.findById(req.params.id).populate('host')
  // // houses.host.avatar
  // // houses.host.datihost(vedi model)
  // console.log(houses)
  //populate houst
  //pass house to template res.render('houses/one', {user: req.user, house})
})

//inserita protecting route
router.get('/:id/edit', (req, res) => {
  if (!req.isAuthenticated()) {
    res.redirect('/auth/login')
  } else {
    res.send('houses/:id/edit')
  }
})

router.patch('/:id', (req, res) => {
  if (!req.isAuthenticated()) {
    res.redirect('/auth/login')
  } else {
    //da modificare route --> res.render(MODIFICARE QUI)
    res.send('hello from patch id')
  }
})

router.delete('/:id', (req, res) => {
  if (!req.isAuthenticated()) {
    res.redirect('/auth/login')
  } else {
    //da modificare route --> res.render(MODIFICARE QUI)
    res.send('hello from delete id')
  }
})
// Export
module.exports = router
