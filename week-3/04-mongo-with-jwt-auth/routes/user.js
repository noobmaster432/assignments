const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const jwt = require("jsonwebtoken");
const { User, Course } = require("../db");
const jwt_secret = "kuchtohaihe";

// User Routes
router.post("/signup", async (req, res) => {
  const { username, password } = req.body;

  await User.create({
    username: username,
    password: password,
  });

  res.json({
    msg: "User created successfully",
  });
});

router.post("/signin", async (req, res) => {
  const { username, password } = req.body;

  const user = await User.find({ username, password });
  if (user) {
    const token = jwt.sign({ username }, jwt_secret);
    res.json({ token });
  } else {
    res.status(411).json({
      msg: "Incorrect email and pass",
    });
  }
});

router.get("/courses", async (req, res) => {
  const response = await Course.find({});
  res.json({ courses: response });
});

router.post("/courses/:courseId", userMiddleware, async (req, res) => {
  const username = req.username;
  const courseId = req.params.courseId;

  await User.updateOne(
    {
      username: username,
    },
    {
      $push: {
        courses: courseId,
      },
    }
  );

  res.json({
    msg: "Course purchased successfully",
  });
});

router.get("/purchasedCourses", userMiddleware, async (req, res) => {
  const user = await User.findOne({
    username: req.username,
  });

  const courses = await Course.find({
    _id: {
      $in: user.courses,
    },
  });

  res.json({
    purchasedCourses: courses,
  });
});

module.exports = router;
