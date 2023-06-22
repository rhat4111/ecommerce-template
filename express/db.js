const mongoose = require("mongoose");

module.exports = connection = async () => {
  try {
    const connectionParams = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    };
    await mongoose.connect(process.env.DB_HOST, connectionParams);
    console.log("connected to database.");
  } catch (error) {
    console.log(error, "could not connect database.");
  }
};