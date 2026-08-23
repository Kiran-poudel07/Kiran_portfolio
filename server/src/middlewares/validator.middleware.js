const validatorMiddleware = (schema) => {
  return (req, res, next) => {
    if (!schema) return next();
    
    // Basic validation check wrapper
    const { error } = schema.validate ? schema.validate(req.body) : { error: null };
    if (error) {
      return res.status(400).json({
        success: false,
        message: "Validation Error",
        errors: error.details ? error.details.map((d) => d.message) : [error.message],
      });
    }
    next();
  };
};

module.exports = validatorMiddleware;
