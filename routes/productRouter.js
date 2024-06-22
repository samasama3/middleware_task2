const express = require('express')
const { getProducts, getProductsById, updateProducts, deleteProducts } = require('../services/productServices')
const router = express.Router()

router.get('/', getProducts)
router.get('/:id', getProductsById)
router.put('/put', updateProducts)
router.delete('/delete', deleteProducts)

module.exports = router


