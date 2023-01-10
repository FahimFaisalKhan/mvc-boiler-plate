const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
exports.dbConnection = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/home-base");
    if (mongoose.connection.readyState === 1) {
      return true;
    }
  } catch (err) {
    console.log(err.message);
    return false;
  }
};
