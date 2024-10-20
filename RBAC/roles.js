const roleMiddleware = (roles) => (req, res, next) => {
  if (!roles.includes(req.user.role)) {
    return res.status(403).send('Access denied');
  }
  next();
};

// Usage:
app.get('/admin', authMiddleware, roleMiddleware(['admin']), (req, res) => {
  res.send('Welcome, admin!');
});
