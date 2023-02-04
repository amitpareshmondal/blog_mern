const mongoose=require("mongoose");
require("dotenv").config();
const url=`mongodb+srv://mandalamit325:${process.env.passwd}@cluster0.1n2xk5n.mongodb.net/?retryWrites=true&w=majority`;
module.exports.connect = () => {
    mongoose
      .connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then(() => {
        console.log("MongoDB connected successfully");
      })
      .catch((error) => console.log("Error: ", error));
  };