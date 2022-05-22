// Export mongoose
const mongoose = require("mongoose");
// //Assign MongoDB connection string to Uri and declare options settings
// // var uri = "mongodb+srv://Project:12345@cluster0.mlr16.mongodb.net/tradeyourcontainer?retryWrites=true&w=majority"
// var uri =
//   "mongodb+srv://Syed_Muhammad_Owais:syedmuhammadowais@cluster0.roii4.mongodb.net/new?retryWrites=true&w=majority";
// // Declare a variable named option and assign optional settings

// const options = {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// };
// // Connect MongoDB Atlas using mongoose connect method
// mongoose.connect(uri, options).then(
//   () => {
//     console.log("Mongoose Database connection established!");
//   },
//   (err) => {
//     {
//       console.log("Error connecting Database instance due to:", err);
//     }
//   }
// );



mongoose.connect('mongodb://localhost:27017/chattingapp', { useNewUrlParser: true });
const db = mongoose.connection;
db.on("error", (err) => console.log("Somethings went wrong to Connect to Database", err))
db.once("open", () => {
    console.log("DB connection has been Successfull")
});