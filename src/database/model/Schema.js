import { Schema, model } from "mongoose";

const userSchema = new Schema({
  username: String,
  email: String,
  password: String,
});

const Users = model("User", userSchema);

export default Users;
