// Authorization middleware
const requireAuth = (req, res, next) => {
  if (req.session.user) {
    // User is logged in
    next();
  } else {
    // User is not authenticated
    res.status(401).json({ message: 'Unauthorized' });
  }
};