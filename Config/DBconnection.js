// //mongoose : used to connect database to the server 
// const mongoose = require ("mongoose");
// const connectDb = async() => {        // async : it is used to return the promise
//      try{
//         const connect = await mongoose; // await :keyword used to pause the execution until the promise  is rejected or resolved used inside ASYNC function.
//         //sync : WAIT function takes place
//         //async : parallely chlta hai function 
//         connect(process.env.
//             CONNECTION_STRING);  // 
//             console.log(
//                 "Database Connected: ",
//                 connect.connection.host,
//                 connect.connection.name);

//      }
//      catch(err){                
//         console.log(err);
//         process.exit(1);   // output dekar exit hoga  
//         // 1 = fail and 0 = pass

        

//      }
//              }
const mongoose = require("mongoose");

const connectDb = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1); // Exit process with failure
  }
};

module.exports = connectDb; // Ensure it's properly exported
