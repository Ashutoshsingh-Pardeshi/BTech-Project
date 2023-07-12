const mongoose = require("mongoose");
const timestampsPlugin = require("mongoose-timestamp");
const VehicleSchema = require("./Vehicle.model");

const OwnerSchema = new mongoose.Schema({
  ownerName: {
    type: String,
    require: true,
    trim: true,
  },
  contactNumber: {
    type: Number,
    require: true,
    trim: true,
  },
  DOB: {
    type: Date,
  },
  fullAddress: {
    type: String,
    require: true,
    trim: true,
  },
  city: {
    type: String,
    require: true,
    trim: true,
  },
  state: {
    type: String,
    require: true,
    trim: true,
  },
  pinCode: {
    type: Number,
    require: true,
    trim: true,
  },
  vehicle: {
    type: VehicleSchema,
    require: true,
  },
}).plugin(timestampsPlugin);

const Owner = mongoose.model("Owner", OwnerSchema);

module.exports = Owner;
