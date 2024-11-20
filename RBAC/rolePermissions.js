const rolePermissions = {
  Admin: ["READ", "WRITE", "UPDATE", "DELETE"],
  User: ["READ", "WRITE"],
  Guest: ["READ"],
};

module.exports = rolePermissions;
