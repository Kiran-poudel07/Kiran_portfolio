const validateProjectInput = (body) => {
  const errors = [];
  if (!body.title) errors.push("Project title is required");
  if (!body.description) errors.push("Project description is required");
  return { isValid: errors.length === 0, errors };
};

module.exports = {
  validateProjectInput,
};
