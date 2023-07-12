const { ObjectId } = require("mongodb");
const mongoose = require("mongoose");
const timestampsPlugin = require("mongoose-timestamp");

const ParkingSchema = new mongoose.Schema({
  ownerId: {
    type: ObjectId,
    require: true,
  },
  licenseNumber: {
    type: String,
    require: true,
    trim: true,
  },
  checkIn: {
    type: Date,
    require: true,
    trim: true,
  },
  parkedSpot: {
    type: String,
    require: true,
    trim: true,
  },
});

const ParkingDetails = mongoose.model("ParkingDetails", ParkingSchema);

module.exports = ParkingDetails;
