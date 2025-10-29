const Joi = require("joi");

const validateSignup = (data) => {
  const schema = Joi.object({
    name: Joi.string().min(2).required(),
    email: Joi.string().email().required(),
    phone: Joi.string().min(10).required(),
    password: Joi.string().min(6).required(),
  });
  return schema.validate(data);
};

const validateLogin = (data) => {
  const schema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required(),
  });
  return schema.validate(data);
};

const validateCar = (data) => {
  const schema = Joi.object({
    name: Joi.string().required(),
    brand: Joi.string().required(),
    model: Joi.string().required(),
    year: Joi.number().required(),
    category: Joi.string().valid("Offroad", "Hypercar", "Supercar", "Luxury", "Family").required(),
    price: Joi.number().required(),
    rentalPrice: Joi.number().required(),
    description: Joi.string(),
    features: Joi.array(),
    fuelType: Joi.string().valid("Petrol", "Diesel", "Electric", "Hybrid"),
    transmission: Joi.string().valid("Manual", "Automatic"),
    seating: Joi.number(),
  });
  return schema.validate(data);
};

const validateBooking = (data) => {
  const schema = Joi.object({
    carId: Joi.string().required(),
    bookingType: Joi.string().valid("rent", "buy").required(),
    startDate: Joi.date().when("bookingType", {
      is: "rent",
      then: Joi.required(),
    }),
    endDate: Joi.date().when("bookingType", {
      is: "rent",
      then: Joi.required(),
    }),
    pickupLocation: Joi.string().required(),
    dropoffLocation: Joi.string().when("bookingType", {
      is: "rent",
      then: Joi.required(),
    }),
  });
  return schema.validate(data);
};

module.exports = {
  validateSignup,
  validateLogin,
  validateCar,
  validateBooking,
};

