const express = require("express");
const router = express.Router();

const {
  getUserById,
  getUser,
  updateUser,
 
} = require("../controllers/user");
const { isSignedIn, isAuthenticated, isAdmin } = require("../controllers/auth");

//get user by id
router.param("userId", getUserById);
router.get("/user/:userId", isSignedIn, isAuthenticated, getUser);
//update userinfo
router.put("/user/:userId", isSignedIn, isAuthenticated, updateUser);

router.get(
  "/orders/user/:userId",
  isSignedIn,
  isAuthenticated,

);

//get all users
// router.get("/users", getAllUsers);

module.exports = router;
