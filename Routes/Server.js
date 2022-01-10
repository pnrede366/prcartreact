const express = require("express");
const { getAdmin } = require("../Controller/Admin");
const { addToCart, updateCart, getCart, getCartProducts, removeCart } = require("../Controller/Cart");
const { addOrder, getOrders } = require("../Controller/Order");
const { getProduct, createProduct, deleteProduct, updateProduct, singleProduct } = require("../Controller/Server");
const { createUser, getUser, getSingleUser } = require("../Controller/User");
const router = express.Router()


router.route("/products").get(getProduct).post(createProduct)
router.route("/products/:id").delete(deleteProduct).put(updateProduct)
router.route("/admin").post(getAdmin)
router.route("/users").post(createUser).get(getUser)
router.route("/singleuser").post(getSingleUser)
router.route("/singleproduct/:id").get(singleProduct)
router.route("/order").post(addOrder)
router.route("/getorders/:id").get(getOrders)
router.route("/cart").post(addToCart)
router.route("/removecart").post(removeCart)
router.route("/cart/:id").put(updateCart)
router.route("/checkcart").post(getCart)
router.route("/cartproducts/:userid").get(getCartProducts)

module.exports=router;