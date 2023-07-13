import { AiOutlineFileDone } from "react-icons/ai";
import Navbar from "./Navbar";
import backgroundImage2 from "../assets/bg-copy.png";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { ParkingSchema } from "./ParkingInterface";

const PaymentDetails = () => {
  const navigate = useNavigate();
  const checkOut = new Date();
  const [user, setUser] = useState<ParkingSchema>();
  const [licenseNumber, setLicenseNumber] = useState("");
  const [parkingCharge, setParkingCharge] = useState("0");
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:3000/api/parkings/${id}`)
      .then((res) => {
        {
          setUser(res.data);
          const checkIn = new Date(res.data.checkIn);
          const duration = (checkOut.getTime() - checkIn.getTime()) / 60000;
          if (duration <= 30) {
            setParkingCharge(duration.toFixed(2));
          } else if (duration <= 120) {
            setParkingCharge((duration * 0.7).toFixed(2));
          } else {
            setParkingCharge(((duration / 60) * 20).toFixed(2));
          }
          console.log(res.data);
          console.log(duration.toFixed(2));
        }
      })
      .catch((err) => console.log(err));

    axios
      .get(`http://localhost:3000/api/owners/${id}`)
      // .delete(`http://localhost:3000/api/owners/${id}`)
      .then((res) => {
        console.log("Removed the user data successfully.");
        setLicenseNumber(res.data.vehicle.licenseNumber);
      })
      .catch((err) => {
        console.log(err);
      });

    axios
      .get(`http://localhost:3000/api/parkings/checkOut/${id}`)
      // .delete(`http://localhost:3000/api/parkings/checkOut/${id}`)
      .then(() => {
        console.log("Updated the parkingSpot status successfully.");
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <div
        style={{
          backgroundImage: `url(${backgroundImage2})`,
          backgroundSize: "cover",
          height: "100vh",
        }}
      >
        <Navbar />

        <div className="alert bg-info bg-opacity-50  border mx-5 mt-3">
          <h4 className="alert-heading text-success">
            <AiOutlineFileDone size={30} className="me-2" />
            Checked out successfully !
          </h4>
          <p>
            Vehicle Number {licenseNumber} has checked out successfully. The
            ticket cost is{" "}
            <span className="badge rounded-pill bg-success">
              ₹ {parkingCharge}/-
            </span>
          </p>
          <hr />

          <h4>Parking Details</h4>
          <div>
            <div>
              Check In Time :{" "}
              {user && new Date(user.checkIn).toLocaleTimeString("en-US")}
            </div>
            <div> Check Out Time : {checkOut.toLocaleTimeString("en-US")}</div>
            <div> Parked Spot : {user && user.parkingSpot}</div>
          </div>

          <div className="d-flex justify-content-center">
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => {
                navigate("/");
              }}
            >
              Go to Home
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default PaymentDetails;
