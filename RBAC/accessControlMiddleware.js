const rolePermissions = require("./rolePermissions");

const checkPermission = (role, permission) => {
  return rolePermissions[role]?.includes(permission);
};

const accessControl = (requiredPermission) => {
  return (req, res, next) => {
    const userRole = req.user.role;

    if (!checkPermission(userRole, requiredPermission)) {
      return res.status(403).json({ error: "Access Denied" });
    }

    next();
  };
};

module.exports = accessControl;
