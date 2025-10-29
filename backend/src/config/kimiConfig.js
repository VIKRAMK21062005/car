const kimiConfig = {
  apiKey: process.env.KIMI_API_KEY || "demo_key",
  apiUrl: process.env.KIMI_API_URL || "https://api.kimi.com/v1",
  model: "kimi-k2",
  timeout: 30000,
};

module.exports = kimiConfig;