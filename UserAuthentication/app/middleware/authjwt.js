const jwt = require("jsonwebtoken");
const config = require("../config/auth.config.js");
const db = require("../models");
const User = db.user;
const Role = db.role;

verifyToken = (req, res, next) => {
  let token = req.headers["x-access-token"];

  if (!token) {
    return res.status(403).send({ message: "No token provided!" });
  }

  jwt.verify(token,
            config.secret,
            (err, decoded) => {
              if (err) {
                return res.status(401).send({
                  message: "Unauthorized!",
                });
              }
              req.userId = decoded.id;
              next();
            });
};

isAdmin = async (req, res, next) => {
  try {
    const user = await User.findById(req.userId).exec();

    if (!user) {
      return res.status(404).send({ message: 'User not found.' });
    }

    const roles = await Role.find({ _id: { $in: user.roles } }).exec();

    if (!roles || roles.length === 0) {
      return res.status(403).send({ message: 'Require Admin Role!' });
    }

    const isAdmin = roles.some((role) => role.name === 'admin');

    if (!isAdmin) {
      return res.status(403).send({ message: 'Require Admin Role!' });
    }

    next();
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};




isModerator = async (req, res, next) => {
  try {
    const user = await User.findById(req.userId).exec();

    if (!user) {
      return res.status(404).send({ message: 'User not found.' });
    }

    const roles = await Role.find({ _id: { $in: user.roles } }).exec();

    if (!roles || roles.length === 0) {
      return res.status(403).send({ message: 'Require Moderator Role!' });
    }

    const isModerator = roles.some((role) => role.name === 'moderator');

    if (!isModerator) {
      return res.status(403).send({ message: 'Require Moderator Role!' });
    }

    next();
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

const authJwt = {
  verifyToken,
  isAdmin,
  isModerator
};
module.exports = authJwt;