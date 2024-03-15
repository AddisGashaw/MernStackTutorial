const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const db = {};
// Store the mongoose object in the db object
db.mongoose = mongoose;

db.user = require("./user.model");
db.role = require("./role.model");

db.ROLES = ["user", "admin", "moderator"];

module.exports = db;