const express = require("express");
const Owner = require("../models/Owner.model");
const { add } = require("../models/Vehicle.model");
const router = express.Router();

const addVehicle = ({ ...props }) => {
  router.post("/add-vehicle", (req, res) => {
    const { ownerId, licenseNumber, parkedSpot } = props;

    console.log(ownerId, licenseNumber, parkedSpot);
  });
};

export { addVehicle };
