const express = require("express");
const ParkingDetails = require("../models/ParkingDetails.model");
const router = express.Router();

router.get("", (req, res) => {
  ParkingDetails.find({}).then((spots) => {
    res.status(201);
    res.send(spots);
  });
});

router.get("/availableSpots", (req, res) => {
  ParkingDetails.find({ isOccupied: false }, "parkingSpot").then((spots) => {
    res.status(200);
    res.send(spots);
  });
});

router.get("/parkedSpots", (req, res) => {
  ParkingDetails.find({ isOccupied: true }).then((spots) => {
    res.status(200);
    res.send(spots);
  });
});

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

module.exports = router;
