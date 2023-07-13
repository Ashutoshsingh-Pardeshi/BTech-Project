const express = require("express");
const Owner = require("../models/Owner.model");
const router = express.Router();

/**
 * @route GET /api/owners
 * @desc Get all the owners from the db
 */
router.get("", (req, res) => {
  try {
    Owner.find({}).then((owner) => {
      res.send(owner);
    });
  } catch (err) {
    console.log(err);
  }
});

/**
 * @route GET /api/owners/:id
 * @desc Get all the owners from the db
 */
router.get("/:id", (req, res) => {
  const ownerId = req.params.id;
  try {
    Owner.findById(ownerId).then((owner) => {
      res.send(owner);
    });
  } catch (err) {
    console.log(err);
  }
});

/**
 * @route POST /api/owners
 * @desc Adds a owner data to the db
 */
router.post("", (req, res) => {
  const {
    ownerName,
    contactNumber,
    DOB,
    fullAddress,
    city,
    state,
    pinCode,
    licenseNumber,
    engineNumber,
    chasisNumber,
    registrationDate,
    color,
    seatingCapacity,
  } = req.body;

  try {
    new Owner({
      ownerName,
      contactNumber,
      DOB,
      fullAddress,
      city,
      state,
      pinCode,
      vehicle: {
        licenseNumber,
        engineNumber,
        chasisNumber,
        registrationDate,
        color,
        seatingCapacity,
      },
    })
      .save()
      .then(async (owner) => {
        const ownerId = owner._id;
        res.status(201);
        res.send(owner);
        console.log("Owner Details: ", owner);
      });
  } catch (e) {
    res.send(e);
  }
});

/**
 * @route DELETE /api/owners
 * @desc Find the user by ID and delete it
 */
router.delete("/:id", (req, res) => {
  const ownerId = req.params.id;
  try {
    Owner.findByIdAndRemove(ownerId).then((owner) => {
      res.status(200);
      res.send(owner);
      console.log(owner);
    });
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
