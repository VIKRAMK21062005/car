const CAR_CATEGORIES = {
  OFFROAD: "Offroad",
  HYPERCAR: "Hypercar",
  SUPERCAR: "Supercar",
  LUXURY: "Luxury",
  FAMILY: "Family",
};

const BOOKING_TYPES = {
  RENT: "rent",
  BUY: "buy",
};

const BOOKING_STATUS = {
  PENDING: "pending",
  CONFIRMED: "confirmed",
  CANCELLED: "cancelled",
  COMPLETED: "completed",
};

const PAYMENT_STATUS = {
  UNPAID: "unpaid",
  PAID: "paid",
};

const FUEL_TYPES = {
  PETROL: "Petrol",
  DIESEL: "Diesel",
  ELECTRIC: "Electric",
  HYBRID: "Hybrid",
};

const TRANSMISSION_TYPES = {
  MANUAL: "Manual",
  AUTOMATIC: "Automatic",
};

const RESPONSE_MESSAGES = {
  SUCCESS: "Operation successful",
  ERROR: "Operation failed",
  UNAUTHORIZED: "Unauthorized access",
  NOT_FOUND: "Resource not found",
  ALREADY_EXISTS: "Resource already exists",
  INVALID_INPUT: "Invalid input provided",
};

module.exports = {
  CAR_CATEGORIES,
  BOOKING_TYPES,
  BOOKING_STATUS,
  PAYMENT_STATUS,
  FUEL_TYPES,
  TRANSMISSION_TYPES,
  RESPONSE_MESSAGES,
};