// const app = require("./app");

// const dotenv = require("dotenv");
// const connectDatabase = require("./config/database")

// //Handling Uncaught Exception
// const port = process.env.PORT || 5000
// const server = app.listen(port, () => {
//     console.log(`Server is working on http://localhost:${port}`)
// })
// process.on("uncaughtException", (err) => {
//     console.log(`Error: ${err.message}`);
//     console.log(`Shutting down the server due to Uncaught Exception`);
//     server.close(() => {
//         process.exit(1);
//     })
// });


// //Config

// dotenv.config({ path: "backend/config/config.env" });


// //Connecting to Database
// connectDatabase()



// //Unhandled Promise Rejection
// process.on("unhandledRejection", err => {
//     console.log(`Error:${err.message}`)
//     console.log(`Shutting down the server due to Unhandled Promise Rejection`)
//     server.close(() => {
//         process.exit(1);
//     })
// })

const app = require("./app");
const dotenv = require("dotenv");


const cloudinary = require("cloudinary");
const connectDatabase = require("./config/database");

// Handling Uncaught Exception
process.on("uncaughtException", (err) => {
    console.log(`Error: ${err.message}`);
    console.log(`Shutting down the server due to Uncaught Exception`);
    process.exit(1);
});

// // Config
// if (process.env.NODE_ENV !== "PRODUCTION") {
//     require("dotenv").config({ path: "backend/config/config.env" });
// }

dotenv.config({ path: "backend/config/config.env" });

// Connecting to database
connectDatabase();

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});


const Port = process.env.PORT || 4000
const server = app.listen(Port, () => {
    console.log(`Server is working on http://localhost:${Port}`);
});

// Unhandled Promise Rejection
process.on("unhandledRejection", (err) => {
    console.log(`Error: ${err.message}`);
    console.log(`Shutting down the server due to Unhandled Promise Rejection`);

    server.close(() => {
        process.exit(1);
    });
});