const mongoose=require("mongoose")
require("dotenv").config({path:"./config.env"})
const connectDatabase=( )=>{
    console.log(process.env.DB_URI)
    mongoose.connect(process.env.DB_URI,{
        useNewUrlParser:true,
        useUnifiedTopology:true
       // useCreateIndex:true,
    })
    .then((data)=>{
console.log(`Mongodb connected with server:${data.connection.host}`);
})
//.catch((err)=>{
//    console.log(err)
//})------->  WE no longer need to have this catch block because we have already handled this in the server.js file where we have handled "Unhandled Promise Rejection"


}
module.exports=connectDatabase