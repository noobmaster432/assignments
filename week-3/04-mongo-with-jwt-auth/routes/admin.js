const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();
const { Admin, Course } = require("../db");
const jwt = require('jsonwebtoken');
const jwt_secret = "kuchtohaihe";

// Admin Routes
router.post("/signup", async (req, res) => {
  const { username, password } = req.body;
  
  await Admin.create({
    username: username,
    password: password,
  });

  res.json({
    msg: "Admin created successfully",
  });
});

router.post("/signin", async (req, res) => {
  const { username, password } = req.body;

  const user = await Admin.find({ username, password });
  if (user) {
    const token = jwt.sign({ username }, jwt_secret);
    res.json({ token });
  } else {
    res.status(411).json({
      msg: "Incorrect email and pass",
    });
  }
});

router.post("/courses", adminMiddleware, async (req, res) => {
  const { title, description, imageLink, price } = req.body;

  const newCourse = await Course.create({
    title,
    description,
    imageLink,
    price,
  });
  res.json({ msg: "Course created successfully", courseId: newCourse._id });
});

router.get("/courses", adminMiddleware, async (req, res) => {
  const response = await Course.find({});
  res.json({ courses: response });
});

module.exports = router;
