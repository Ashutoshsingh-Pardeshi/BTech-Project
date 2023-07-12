const express = require("express");
const ParkingDetails = require("../models/ParkingDetails.model");
const router = express.Router();

router.get("", (req, res) => {
  ParkingDetails.find({}).then((spots) => {
    res.status(201);
    res.send(spots);
  });
});

router.get("/availableSpot", (req, res) => {
  ParkingDetails.findOne({ isOccupied: false }, "parkingSpot").then((spots) => {
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

router.get("/:ownerId", (req, res) => {
  const { ownerId } = req.params;

  ParkingDetails.findOne({ ownerId }).then((spot) => {
    res.status(200);
    res.send(spot);
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
