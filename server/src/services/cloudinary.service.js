const uploadToCloudinary = async (filePath) => {
  console.log(`[Cloudinary Service] Upload placeholder for: ${filePath}`);
  return { url: filePath };
};

module.exports = {
  uploadToCloudinary,
};
