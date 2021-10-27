import mongoose from "mongoose";
const { Schema, model } = mongoose;
const userSchema = Schema({
  email: {
    type: String,
  },
  password: {
    type: String,
  },
});

export const Balu = model("Balu", userSchema);
