const express = require('express')
const router = express.Router()
const Restaurant = require('../../models/restaurant')
const getCategoryList = require('../../utils/getCategoryList')

router.get('/', (req, res) => {
  Restaurant.find()
    .lean()
    .then((restaurants) => {
      const categoryList = getCategoryList(restaurants)
      res.render('index', { layout: 'withSearchBar', restaurants, categoryList })
    })
    .catch(error => console.log(error))
})

module.exports = router