const users = require("../models/users");

const assignRole = (userId, role) => {
  const user = users.find((u) => u.id === userId);
  if (!user) {
    throw new Error("User not found");
  }
  user.role = role;
};

module.exports = { assignRole };
