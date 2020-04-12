const User = require("../models/user");


exports.getUserById = (req, res, next, id) => {
  User.findById(id).exec((err, user) => {
    if (err || !user) {
      return res.status(400).json({
        error: "No user Was found in Db"
      });
    }
    req.profile = user;
    next();
  });
};
//stopping view sensetive info in user profile
exports.getUser = (req, res) => {
  req.profile.salt = undefined;
  req.profile.encry_password = undefined;
  req.profile.createdAt = undefined;
  req.profile.updatedAt = undefined;
  return res.json(req.profile);
};

//showing all users in users route
// exports.getAllUsers = (req, res) => {
//   User.find().exec((err, users) => {
//     if (err || !users) {
//       return res.status(400).json({
//         error: "No user FOund"
//       });
//     }
//     res.json(users);
//   });
// };

//updating user
exports.updateUser = (req, res) => {
  User.findByIdAndUpdate(
    { _id: req.profile._id },
    { $set: req.body },
    { new: true, useFindAndModify: false },
    (err, user) => {
      if (err) {
        return res.status(400).json({ error: "You are not allowed to update" });
      }
      user.salt = undefined;
      user.encry_password = undefined;
      res.json(user);
    }
  );
};




