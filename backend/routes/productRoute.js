const express=require("express");

//const {getAllProducts}=require("../controllers/productController");

const {getAllProducts,createProduct}=require("../controllers/productController");

const router=express.Router();


router.route("/products").get(getAllProducts);

router.route("/product/new").post(createProduct);
module.exports=router