const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/registration", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useCreateIndex: true,
    // useFindAndModify:false,
  })
  .then(() => {
    console.log(" connection sucessfull...");
  })
  .catch((err) => {
    console.log(err);
    console.log(" connection bad...");
  });
