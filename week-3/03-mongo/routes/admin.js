const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();
const { Admin, Course } = require("../db");

// Admin Routes
router.post("/signup", async (req, res) => {
  const { username, password } = req.body;

  await Admin.create({
    username,
    password,
  });
  res.json({
    message: "Admin created successfully",
  });
});

router.post("/courses", adminMiddleware, async (req, res) => {
  const { title, description, imageLink, price } = req.body;

  const newCourse = await Course.create({
    title,
    description,
    imageLink,
    price,
  });

  res.json({
    message: "Course created successfully",
    courseId: newCourse._id,
  });
});

router.get("/courses", adminMiddleware, async (req, res) => {
  const response = await Course.find({});

  res.json({ courses: response });
});

module.exports = router;
