// Packages
const express = require('express')
const router = express.Router()

// Views
router.get('/', (req, res) => {
  if (!req.isAuthenticated()) {
    res.redirect('/auth/login')
  } else {
    // (({host: req.user._id }))
    res.render('profile', { user: req.user })
  }
})

router.patch('/', async (req, res, next) => {
  // try {
  // 	console.log('prova Modifica')
  // 	if (!req.isAuthenticated()) {
  // 		res.redirect('/auth/login')
  // 	} else {
  // 		let user = await Users.findByIdAndUpdate(req.user._id, req.body, {new: true})
  // 	}
  // 	// 	req.login(user, err => {
  // 	// 		if (err) {
  // 	// 			throw err
  // 	// 		} else {
  // 	// 			catch (err) {
  // 	// 		    next(err)
  // 	// 		  }
  // 	// 	})
  // 	// } catch (err) {
  // 	// 	next(err)
  // 	// }
  // } cath (err) {
  // 	next(err)
  // }
})

// Export
module.exports = router
