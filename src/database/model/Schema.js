import mongoose from "mongoose";

const { Schema } = mongoose;

const userSchema = new Schema({
  username: String,
  email: String,
  password: String,
});

export default mongoose.models.Users || mongoose.model("Users", userSchema);
