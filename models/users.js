const { default: mongoose } = require("mongoose");
const { Schema } = require("mongoose");

const userSchema = new Schema({
  index: Number,
  age: Number,
  eyeColor: String,
  name: { type: String, text: true },
  gender: String,
  email: String,
  phone: String,
  address: String,
  friends: [String],
});

userSchema.path("name").index({ text: true });

const Users = mongoose.model("User", userSchema);
Users.ensureIndexes({ name: "text" });
module.exports = Users;
