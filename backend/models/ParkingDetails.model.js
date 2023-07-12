const { ObjectId } = require("mongodb");
const mongoose = require("mongoose");
const timestampsPlugin = require("mongoose-timestamp");

const ParkingSchema = new mongoose.Schema({
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

// const ParkingDetails = mongoose.model("ParkingDetails", ParkingSchema);

module.exports = ParkingSchema;
