const { ObjectId } = require("mongodb");
const mongoose = require("mongoose");
const timestampsPlugin = require("mongoose-timestamp");

const ParkingSchema = new mongoose.Schema({
  ownerId: {
    type: ObjectId,
    require: function () {
      return this.isOccupied;
    },
    trim: true,
  },
  isOccupied: {
    type: Boolean,
    require: true,
  },
  checkIn: {
    type: Date,
    require: function () {
      return this.isOccupied;
    },
    trim: true,
  },
  parkingSpot: {
    type: String,
    require: true,
    trim: true,
  },
});

const ParkingDetails = mongoose.model("ParkingDetails", ParkingSchema);

module.exports = ParkingDetails;
