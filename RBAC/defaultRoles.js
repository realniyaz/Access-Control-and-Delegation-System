const defaultRoles = [
  { name: "Admin", permissions: ["READ", "WRITE", "UPDATE", "DELETE"] },
  { name: "User", permissions: ["READ", "WRITE"] },
  { name: "Guest", permissions: ["READ"] },
];

module.exports = defaultRoles;
