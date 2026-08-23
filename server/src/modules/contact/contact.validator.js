const validateContactInput = (body) => {
  const errors = [];
  if (!body.name) errors.push("Name is required");
  if (!body.email) errors.push("Valid email is required");
  if (!body.message) errors.push("Message cannot be empty");
  return { isValid: errors.length === 0, errors };
};

module.exports = {
  validateContactInput,
};
