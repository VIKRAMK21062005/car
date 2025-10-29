const mongoose = require("mongoose");

const carSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please provide a car name"],
      trim: true,
    },
    brand: {
      type: String,
      required: true,
      trim: true,
    },
    model: {
      type: String,
      required: true,
      trim: true,
    },
    year: {
      type: Number,
      required: true,
    },
    category: {
      type: String,
      enum: ["Offroad", "Hypercar", "Supercar", "Luxury", "Family"],
      required: true,
    },
    description: {
      type: String,
      default: "",
    },
    price: {
      type: Number,
      required: true,
    },
    rentalPrice: {
      type: Number, // Price per day for rental
      required: true,
    },
    image: {
      type: String, // Base64 encoded image
      default: null,
    },
    features: [String], // e.g., ["AC", "Power Steering", "ABS"]
    mileage: {
      type: Number,
      default: 0,
    },
    fuelType: {
      type: String,
      enum: ["Petrol", "Diesel", "Electric", "Hybrid"],
      default: "Petrol",
    },
    transmission: {
      type: String,
      enum: ["Manual", "Automatic"],
      default: "Automatic",
    },
    seating: {
      type: Number,
      default: 5,
    },
    availability: {
      type: Boolean,
      default: true,
    },
    isFeatured: {
      type: Boolean,
      default: false,
    },
    rating: {
      type: Number,
      default: 0,
      min: 0,
      max: 5,
    },
    reviews: [
      {
        userId: mongoose.Schema.Types.ObjectId,
        rating: Number,
        comment: String,
        date: {
          type: Date,
          default: Date.now,
        },
      },
    ],
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Car", carSchema);
