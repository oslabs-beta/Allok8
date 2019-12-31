const xController = {};

xController.middleware = (req, res, next) => {
  res.status(200);
  return next();
};

module.exports = xController;
