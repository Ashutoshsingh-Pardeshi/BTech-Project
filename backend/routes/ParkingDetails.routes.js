const express = require("express");
const ParkingDetails = require("../models/ParkingDetails.model");
const router = express.Router();

/**
 * @route GET /api/parkings
 * @desc Gets all the parking spots
 */
router.get("", (req, res) => {
  ParkingDetails.find({}).then((spots) => {
    res.status(201);
    res.send(spots);
  });
});

/**
 * @route GET /api/parkings/availableSpot
 * @desc Get a single free parking spot
 */
router.get("/availableSpot", (req, res) => {
  ParkingDetails.findOne({ isOccupied: false }, "parkingSpot").then((spots) => {
    res.status(200);
    res.send(spots);
  });
});

/**
 * @route GET /api/parkings/parkedSpots
 * @desc Gets only the occupied parking spots
 */
router.get("/parkedSpots", (req, res) => {
  ParkingDetails.find({ isOccupied: true }).then((spots) => {
    res.status(200);
    res.send(spots);
  });
});

/**
 * @route GET /api/parkings/:ownerId
 * @desc Get the parking spot occupied by specific owner
 */
router.get("/:ownerId", (req, res) => {
  const { ownerId } = req.params;

  ParkingDetails.findOne({ ownerId }).then((spot) => {
    res.status(200);
    res.send(spot);
  });
});

/**
 * @route POST /api/parkings/addSpot/:parkingSpot
 * @desc Create a new parking spot
 */
router.post("/addSpot/:parkingSpot", (req, res) => {
  const { parkingSpot } = req.params;
  try {
    new ParkingDetails({
      isOccupied: false,
      parkingSpot,
    })
      .save()
      .then((spot) => {
        res.status(201);
        res.send(spot);
      });
  } catch (err) {
    console.log(err);
  }

  console.log(ownerId, parkedSpot);
});

/**
 * @route PUT /api/parkings/occupy/:ownerId/:parkingSpot
 * @desc Allocate a parking spot to an owner
 */
router.put("/occupy/:ownerId/:parkingSpot", (req, res) => {
  const { ownerId, parkingSpot } = req.params;

  ParkingDetails.findOneAndUpdate(
    { parkingSpot },
    { isOccupied: true, ownerId, checkIn: new Date() }
  ).then((spot) => {
    res.status(200);
    res.send(spot);
  });
});

/**
 * @route PUT /api/parkings/vacate/:parkingSpot
 * @desc Remove the user from a parking spot using parkingSpot
 */
router.put("/vacate/:parkingSpot", (req, res) => {
  const { parkingSpot } = req.params;

  ParkingDetails.findOneAndUpdate(
    { parkingSpot },
    { isOccupied: false, ownerId: null, checkIn: null }
  ).then((spot) => {
    res.status(200);
    res.send(spot);
  });
});

/**
 * @route PUT /api/parkings/vacate/:ownerId
 * @desc Remove the user from a parking spot using ownerId
 */
router.delete("/checkOut/:ownerId", (req, res) => {
  const { ownerId } = req.params;

  ParkingDetails.findOneAndUpdate(
    { ownerId },
    { isOccupied: false, ownerId: null, checkIn: null }
  ).then((spot) => {
    res.status(200);
    res.send(spot);
  });
});

module.exports = router;
