import { useNavigate, useParams } from "react-router-dom";
import Navbar from "./Navbar";
import backgroundImage2 from "../assets/bg-copy.png";
import { useEffect, useState } from "react";
import axios from "axios";
import { OwnerSchema } from "../assets/common/OwnerInterface";
import { ParkingSchema } from "../assets/common/ParkingInterface";

const ViewDetails = () => {
  // const { params } = props.match;
  const { id } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState<OwnerSchema>();
  const [parking, setParking] = useState<ParkingSchema>();

  useEffect(() => {
    axios
      .get(`http://localhost:3000/api/owners/${id}`)
      .then((res) => {
        setUser(res.data);
      })
      .catch((err) => {
        console.log(err);
      });

    axios
      .get(`http://localhost:3000/api/parkings/${id}`)
      .then((res) => {
        setParking(res.data);
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

        <div className="container mt-3">
          <div className="row">
            <div className="d-flex flex-column justify-content-evenly col-4">
              <img
                src={
                  // "/src/assets/images/MHOTAV8866-org.jpeg"
                  "/src/assets/images/" +
                  user?.vehicle.licenseNumber +
                  "-org.jpg"
                }
                className="rounded float-start mb-2"
                alt="Image"
                style={{ maxHeight: "300px", maxWidth: "300px" }}
              ></img>
              <img
                src={
                  // "/src/assets/images/MHOTAV8866-bb.jpg"
                  "/src/assets/images/" +
                  user?.vehicle.licenseNumber +
                  "-bb.jpg"
                }
                className="rounded float-start my-2"
                alt="Image"
                style={{ maxHeight: "300px", maxWidth: "300px" }}
              ></img>
              <img
                src={
                  // "/src/assets/images/MHOTAV8866-cpd.jpg"
                  "/src/assets/images/" +
                  user?.vehicle.licenseNumber +
                  "-cpd.jpg"
                }
                className="rounded float-start mt-2"
                alt="Image"
                style={{ maxHeight: "300px", maxWidth: "300px" }}
              ></img>
            </div>
            <div className="col-8">
              {/* Owner Details */}
              <div className="card mb-2 bg-info bg-opacity-50">
                <figure className="text-center">
                  <h1 className="display-6 pt-2">Owner Details</h1>
                </figure>
                <div className="card-body">
                  <div className="row ">
                    <div className="col-2">
                      <p className="h6">Full Name :</p>
                    </div>
                    <div className="col-10">
                      <p className="h6">{user && user.ownerName}</p>
                    </div>

                    <div className="col-2">
                      <p className="h6">Address :</p>
                    </div>
                    <div className="col-10">
                      <p className="h6">{user && user.fullAddress}</p>
                    </div>

                    <div className="col-2">
                      <p className="h6">City :</p>
                    </div>
                    <div className="col-4">
                      <p className="h6">{user && user.city}</p>
                    </div>

                    <div className="col-2">
                      <p className="h6">State :</p>
                    </div>
                    <div className="col-3">
                      <p className="h6">{user && user.state}</p>
                    </div>

                    <div className="col-2">
                      <p className="h6">Pincode :</p>
                    </div>
                    <div className="col-10">
                      <p className="h6">{user && user.pinCode.toString()}</p>
                    </div>

                    <div className="col-2">
                      <p className="h6">Date of Birth </p>
                    </div>
                    <div className="col-3">
                      <p className="h6">
                        {user && new Date(user.DOB).toLocaleDateString()}
                      </p>
                    </div>

                    <div className="col-3">
                      <p className="h6">Phone Number :</p>
                    </div>
                    <div className="col-3">
                      <p className="h6">
                        {user && user.contactNumber.toString()}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Vehicle Details */}
              <div className="card my-2 bg-info bg-opacity-50">
                <figure className="text-center">
                  <h1 className="display-6 pt-2">Vehicle Details</h1>
                </figure>

                <div className="card-body">
                  <div className="row">
                    <div className="col-3">
                      <p className="h6">License Number :</p>
                    </div>
                    <div className="col-3">
                      <p className="h6">{user && user.vehicle.licenseNumber}</p>
                    </div>

                    <div className="col-3">
                      <p className="h6">Registration Date </p>
                    </div>
                    <div className="col-3">
                      <p className="h6">
                        {user &&
                          new Date(
                            user.vehicle.registrationDate
                          ).toLocaleDateString()}
                      </p>
                    </div>

                    <div className="col-3">
                      <p className="h6">Engine Number :</p>
                    </div>
                    <div className="col-3">
                      <p className="h6">{user && user.vehicle.engineNumber} </p>
                    </div>

                    <div className="col-3">
                      <p className="h6">Chasis Number : </p>
                    </div>
                    <div className="col-3">
                      <p className="h6">{user && user.vehicle.chasisNumber}</p>
                    </div>

                    <div className="col-3">
                      <p className="h6">Color : </p>
                    </div>
                    <div className="col-3">
                      <p className="h6">{user && user.vehicle.color} </p>
                    </div>

                    <div className="col-3">
                      <p className="h6">Seating Capacity : </p>
                    </div>
                    <div className="col-3">
                      <p className="h6">
                        {user && user.vehicle.seatingCapacity.toString()}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Parking Details */}
              <div className="card my-2 bg-info bg-opacity-50">
                <figure className="text-center">
                  <h1 className="display-6 pt-2">Parking Details</h1>
                </figure>

                <div className="card-body">
                  <div className="row">
                    <div className="col-3">
                      <p className="h6">Check In Time :</p>
                    </div>
                    <div className="col-3">
                      <p className="h6">
                        {parking &&
                          new Date(parking.checkIn).toLocaleTimeString("en-US")}
                      </p>
                    </div>

                    <div className="col-3">
                      <p className="h6">Parked Spot : </p>
                    </div>
                    <div className="col-3">
                      <p className="h6">{parking && parking.parkingSpot} </p>
                    </div>

                    <div className="d-flex justify-content-center mt-4 mb-0">
                      <button
                        type="button"
                        className="btn btn-warning px-4 py-2"
                        onClick={() => {
                          navigate(`/check-out/${user && user._id}`);
                        }}
                      >
                        <span className="h5">Check Out</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="d-flex justify-content-center my-3">
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => {
                    navigate("/parked-vehicles");
                  }}
                >
                  <span className="h5">Go Back</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewDetails;
