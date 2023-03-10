const router = require('express').Router()
const productCtrl = require('../controllers/productController')
const auth = require('../middleware/auth')
const authAdmin = require('../middleware/authAdmin')


router.route('/products')
    .get(productCtrl.getProducts)
    .post(productCtrl.createProduct)


router.route('/products/:id')
    .delete(auth, authAdmin, productCtrl.deleteProduct)
    .put( productCtrl.updateProduct)



module.exports = router