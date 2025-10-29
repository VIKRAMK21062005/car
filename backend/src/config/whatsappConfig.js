const whatsappConfig = {
  apiUrl: process.env.WHATSAPP_API_URL || "https://graph.instagram.com/v17.0",
  phoneNumberId: process.env.WHATSAPP_PHONE_NUMBER_ID || "your_phone_id",
  accessToken: process.env.WHATSAPP_ACCESS_TOKEN || "your_token",
  businessAccountId: process.env.WHATSAPP_BUSINESS_ACCOUNT_ID || "your_account_id",
};

module.exports = whatsappConfig;