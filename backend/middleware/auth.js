const ErrorHander = require("../utils/errorhander");
const catchAsyncErrors = require("./catchAsyncErrors");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

exports.isAuthenticatedUser = catchAsyncErrors(async (req, res, next) => {
  console.log("cookies", req.cookies);
  const { token } = req.cookies;
  console.log("token = ",token)
  if (!token) {
    return next(new ErrorHander("Please Login to access this resource", 401));
    //  return next(new ErrorHander("Please login to aceess"));
    // return res.status(400).json({
    //   code:400,
    //   msg:"Please Login to access this resource",
    // })
  }

  const decodedData = jwt.verify(token, process.env.JWT_SECRET);

  req.user = await User.findById(decodedData.id);

  next();
});

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
