const sendEmail = async ({ to, subject, html }) => {
  console.log(`[Email Service] Simulated email sending to: ${to} | Subject: ${subject}`);
  return true;
};

module.exports = {
  sendEmail,
};
