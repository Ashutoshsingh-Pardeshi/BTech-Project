const express = require("express");
const Owner = require("../models/Owner.model");
const ParkingDetails = require("../models/ParkingDetails.model");
const router = express.Router();

const addVehicle = async ({ ...props }) => {
  const { ownerId, licenseNumber, parkedSpot } = props;

  const vehicle = await new ParkingDetails({
    ownerId,
    licenseNumber,
    parkedSpot,
    checkIn: new Date(),
  });
  vehicle.save().then((details) => {
    console.log("Vehicle details added successfully");
    console.log(details);
  });
  console.log("Vehicle: ", vehicle);
  return vehicle;
};

const removeVehicle = ({ ...props }) => {
  const { ownerId } = props;
  try {
    ParkingDetails.findOneAndRemove({
      ownerId,
    }).then((vehicle) => {
      console.log("Vehicle details removed successfully");
      console.log(vehicle);
    });
  } catch (err) {
    console.log(err);
  }
};

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
    parkedSpot,
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
        const vehicle = await addVehicle({
          ownerId,
          licenseNumber,
          parkedSpot,
        });
        res.status(201);
        res.send({ owner, vehicle });
        console.log("Owner Details: ", owner);
        console.log("Vehicle Details: ", vehicle);
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
    // Owner.findOneAndRemove({ _id: new ObjectId(owner_id) }).then((owner) => {
    Owner.findByIdAndRemove(ownerId).then((owner) => {
      try {
        ParkingDetails.findOneAndRemove({
          ownerId,
        }).then((vehicle) => {
          console.log("Vehicle details removed successfully");
          console.log(vehicle);
          console.log(owner);
          res.send({ owner, vehicle });
        });
      } catch (err) {
        console.log(err);
      }
    });
  } catch (err) {
    console.log(err);
  }
});

/**
 * @route POST /api/owners/addVehicle/:ownerId
 * @desc Adds a new vehicle linked to the user
 */
router.post("/addVehicle/:ownerId", async (req, res) => {
  const { ownerId } = req.params;
  const { licenseNumber, parkedSpot } = req.body;
  try {
    const vehicle = await addVehicle({ ownerId, licenseNumber, parkedSpot });
    res.status(201);
    res.send(vehicle);
  } catch (err) {
    console.log(err);
  }
});

/**
 * @route DELETE /api/owners/removeVehicle/:ownerId
 * @desc Remove the vehicle linked to the user
 */
router.delete("/removeVehicle/:ownerId", (req, res) => {
  const { ownerId } = req.params;
  try {
    removeVehicle({ ownerId });
    res.status(204);
    res.send("Deleted Successfully");
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
