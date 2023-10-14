import { type } from "express/lib/response";
import mongoose, { Schema } from "mongoose";

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: [true, "first name is required"],
    },
    lastName: {
      type: String,
      required: [true, "first name is required"],
    },
    email: {
      type: String,
      required: [true, "first name is required"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "first name is required"],
      minlength: [6, "min length"],
      select: true,
    },
    friends: [{ type: Schema.Types.ObjectId, ref: Users }],
  },
  { timeStamps: true }
);

const Users = mongoose.model("Users", userSchema)

export default Users
