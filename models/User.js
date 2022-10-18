const mongoose = require("mongoose");

//define what will be in a user OBJECT
const userSchema = new mongoose.Schema(
  {
    username: { type: String, required: true },
    password: { type: String, required: true, select: false }, //when retrieving user doc, passowrd isnt sent back
    email: {
      type: String,
      required: true,
      unique: true,
      //form validation-like for email via regex.
      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        "Please enter a valid email",
      ],
    },
    displayName: { type: String, required: true },
  },
  // we can pass schema options such as timestamps - createdAt updatedAt
  { timestamps: true }
);

//name of schema and the schemaa reference object.
module.exports = mongoose.model("user", userSchema);
