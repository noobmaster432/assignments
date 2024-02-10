const mongoose = require("mongoose");

// Connect to MongoDB
mongoose.connect(
  "mongodb+srv://noobmaster432:killdoller@cluster0.n32sq2v.mongodb.net/demo"
);

// Define schemas
const AdminSchema = new mongoose.Schema({
  username: String,
  password: String,
});

const UserSchema = new mongoose.Schema({
  username: String,
  password: String,
  courses: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Course",
    },
  ],
});

const CourseSchema = new mongoose.Schema({
  title: String,
  description: String,
  price: Number,
  imageLink: String,
});

const Admin = mongoose.model("Admin-jwt", AdminSchema);
const User = mongoose.model("User-jwt", UserSchema);
const Course = mongoose.model("Course-jwt", CourseSchema);

module.exports = {
  Admin,
  User,
  Course,
};
