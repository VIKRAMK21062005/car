// Convert Buffer to Base64
const bufferToBase64 = (buffer) => {
  if (!buffer) return null;
  return buffer.toString("base64");
};

// Convert Base64 to Buffer
const base64ToBuffer = (base64String) => {
  if (!base64String) return null;
  return Buffer.from(base64String, "base64");
};

// Convert file to Base64
const fileToBase64 = (file) => {
  if (!file) return null;
  return file.buffer.toString("base64");
};

// Validate image
const validateImage = (file) => {
  if (!file) return false;
  const validMimeTypes = ["image/jpeg", "image/png", "image/gif", "image/webp"];
  return validMimeTypes.includes(file.mimetype);
};

module.exports = {
  bufferToBase64,
  base64ToBuffer,
  fileToBase64,
  validateImage,
};