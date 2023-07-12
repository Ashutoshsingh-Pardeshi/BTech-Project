const mongoose = require("mongoose");

const VehicleSchema = new mongoose.Schema({
  licenseNumber: {
    type: String,
    require: true,
    trim: true,
  },
  engineNumber: {
    type: String,
    require: true,
    trim: true,
  },
  chasisNumber: {
    type: String,
    require: true,
    trim: true,
  },
  registrationDate: {
    type: Date,
    require: true,
    trim: true,
  },
  color: {
    type: String,
    trim: true,
  },
  seatingCapacity: {
    type: Number,
    trim: true,
  },
});

module.exports = VehicleSchema;
