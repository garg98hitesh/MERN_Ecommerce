const express = require("express");
const cors = require("cors");
const app = express();
const errorMiddleware = require("./middleware/error");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const fileUpload = require("express-fileupload");


app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(fileUpload());

//Route Imports

app.use(cors());
// app.use(errorMiddleware)
const product = require("./routes/productRoute");
const user = require("./routes/userRoute");
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    res.header("Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, OPTIONS");
    next();
});

app.use("/api/v1", product);
app.use("/api/v1", user);

//Middleware for Error

app.use(errorMiddleware);
const port=process.env.PORT 


module.exports = app;
