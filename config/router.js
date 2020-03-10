const express=require('express')

const router=express.Router()

const user_Controller=require('../controllers/UserController')
const category_Controller=require('../controllers/CategoryController')
const item_Controller=require('../controllers/ItemController')
const order_Controller=require('../controllers/OrderController')
const purchase_Controller=require('../controllers/PurchaseController')
// const {autheticate}=require('../middleware/authenticate')

router.post('/register',user_Controller.register)
router.post('/login',user_Controller.login)
// router.delete('/logout',user_Controller.logout)


router.post('/category/new', category_Controller.create)
router.get('/categories', category_Controller.list)
router.delete('/category/:id',category_Controller.delete)

router.post('/item/new',item_Controller.create)
router.get('/items',item_Controller.list)

router.post('/order/new',order_Controller.create)
router.get('/orders',order_Controller.list)
router.delete('/order/:id',order_Controller.delete)

router.post('/purchase/new',purchase_Controller.create)
router.get('/purchases',purchase_Controller.list)
router.delete('/purchase/:id',purchase_Controller.delete)

module.exports=router

