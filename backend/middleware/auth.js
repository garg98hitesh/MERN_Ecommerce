const ErrorHander = require("../utils/errorhander");
const catchAsyncErrors = require("./catchAsyncErrors");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");
require("dotenv").config({ path: "../config/config.env" })
// exports.isAuthenticatedUser = catchAsyncErrors(async (req, res, next) => {
//   console.log("cookies", req.cookies);
//   const { token } = req.cookies;
//   console.log("token = ",token)
//   if (!token) {
//     return next(new ErrorHander("Please Login to access this resource", 401));
//     //  return next(new ErrorHander("Please login to aceess"));
//     // return res.status(400).json({
//     //   code:400,
//     //   msg:"Please Login to access this resource",
//     // })
//   }

exports.isAuthenticatedUser = async (req, res, next) => {
  try {
    const headerToken = req.headers.authorization;
    console.log(req.headers)
    console.log("headr Token ", headerToken)
    if (!headerToken) {
      return res.status(401).json({ code: 401, message: "No token provided" });
    }

    if (headerToken && headerToken.split(" ")[0] !== "Bearer") {
      res.status(401).json({ code: 401, message: "Invalid token" });
    }

    const token = headerToken.split(" ")[1];
    await jwt.verify(token, process.env.JWT_SECRET, {
      algorithms: "HS256",
    });
    const userId = jwt.decode(token, process.env.JWT_SECRET);
    const user = await User.findById(userId.id);
    user.id = user._id;
    req.user = user;
    next();
  } catch (error) {
    console.error("Authentication error", error);
    res.status(403).json({ code: 403, message: "Could not authorize" });
  }
};


//   const decodedData = jwt.verify(token, process.env.JWT_SECRET`);

//   req.user = await User.findById(decodedData.id);

//   next();
// });

exports.authorizeRoles = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return next(
        new ErrorHander(
          `Role: ${req.user.role} is not allowed to access this resouce `,
          403
        )
      );
      //    res.status(403).json({
      //      code: 403,
      //      msg: `Role: ${req.user.role} is not allowed to access this resouce `,
      //    });
    }

    next();
  };
};
