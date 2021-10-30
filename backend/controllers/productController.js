const Product=require("../models/productModel");
const ErrorHander=require("../utils/errorHander");
const catchAsyncErrors=require("../middleware/catchAsyncErrors")
const ApiFeatures = require("../utils/apifeatures");

//Create Product -- Admin
exports.createProduct = catchAsyncErrors(async(req,res,next)=>{
    const product=await Product.create(req.body);
    res.status(201).json({
        success:true,
        product
    })
})

//Get All Product
exports.getAllProducts =catchAsyncErrors(async(req,res)=>{
  const resultPerPage = 5;
  const productsCount = await Product.countDocuments();
    
  const apiFeature = new ApiFeatures(Product.find(), req.query)
    .search()
    .filter()
    .pagination(resultPerPage);

  products = await apiFeature.query;


  let products = await apiFeature.query;
    //  res.status(200).json( {message:"Route is working fine"})
    res.status(200).json({
        success:true, 
        products,
        productsCount
   })
})

//Update Product-- Admin
// Also we have to deal with async errors and we have studied that we deal with them by using try and catch block
//but because we are having so many functions, writing try and catch is gonna increase the length of our code
//so for that also we have created a error handler especially for async. Async error can be of the type for 
//example in name of the product we have mentioned that it is a required field so if we do not give in input the name of the product then our server will keep on sending the request but it will never be received so to overcome this we are gonna make a new file in middleware named "catchAsyncError.js" 
exports.updateProduct= catchAsyncErrors(async(req,res,next)=>{
    let product = await Product.findById(req.params.id);
    //   if(!product)
//     {
//         return res.status(500).json({
//             success:false,
//             message:"Product not found"
//         })
//     }
// The above condition for product not find is needing to be repeated in every function like getDetails
// updateDetails,deleteProduct so we will replace it with the below conditon and we will write in a 
// separate file named ERRORHANDER.JS present in UTILS folder
  
  if (!product) {
    return next(new ErrorHander("Product not found", 404));// next is a callback function
  }
   
    product= await Product.findByIdAndUpdate(req.params.id,req.body,{
        new:true,
        runValidators:true,
        useFindAndModify:false,   
    })
    res.status(200).json({
        success:true,
        product
    })
})
// Get Product Details
exports.getProductDetails = catchAsyncErrors(async (req, res, next) => {
  const product = await Product.findById(req.params.id);
  
  //   if(!product)
//     {
//         return res.status(500).json({
//             success:false,
//             message:"Product not found"
//         })
//     }
// The above condition for product not find is needing to be repeated in every function like getDetails
// updateDetails,deleteProduct so we will replace it with the below conditon and we will write in a 
// separate file named ERRORHANDER.JS present in UTILS folder

  if (!product) {
    return next(new ErrorHander("Product not found", 404));// next is a callback function
  }

  res.status(200).json({
    success: true,
    product,
  });
})

// Delete Product

exports.deleteProduct = catchAsyncErrors(async (req, res, next) => {
  const product = await Product.findById(req.params.id);

//   if(!product)
//     {
//         return res.status(500).json({
//             success:false,
//             message:"Product not found"
//         })
//     }
// The above condition for product not find is needing to be repeated in every function like getDetails
// updateDetails,deleteProduct so we will replace it with the below conditon and we will write in a 
// separate file named ERRORHANDER.JS present in UTILS folder
  
  if (!product) {
    return next(new ErrorHander("Product not found", 404));// next is a callback function
  }

  

//   // Deleting Images From Cloudinary
//   for (let i = 0; i < product.images.length; i++) {
//     await cloudinary.v2.uploader.destroy(product.images[i].public_id);
//   }

  await product.remove();

  res.status(200).json({
    success: true,
    message: "Product Delete Successfully",
  });
})