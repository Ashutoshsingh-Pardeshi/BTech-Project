const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const owners = require("./routes/Owner.routes");
const parkings = require("./routes/ParkingDetails.routes");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/owners", owners);
app.use("/api/parkings", parkings);

app.listen(3000, () => {
  console.log("Listening on PORT 3000 ...");
  mongoose
    .connect("mongodb://localhost:27017/vehicleDB", { useNewUrlParser: true })
    .then(() => console.log("Connect to db successflly ... "))
    .catch((err) => console.log(err));

  mongoose.connection.on("error", (err) => console.log(" Error: ", err));
});
