import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import backgroundImage2 from "../assets/bg-copy.png";
import { useEffect, useState } from "react";
import axios from "axios";
import { OwnerSchema } from "./OwnerInterface";
import { ParkingSchema } from "./ParkingInterface";

const ParkedVehicles = () => {
  const [users, setUsers] = useState<OwnerSchema[]>([]);
  const [parkingSpots, setParkingSpots] = useState<ParkingSchema[]>([]);
  const [time, setTime] = useState(new Date().toLocaleTimeString("en-US"));

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/owners")
      .then((res) => {
        console.log("user : ", res.data);
        setUsers(res.data);
      })
      .catch((err) => {
        console.log(err);
      });

    axios
      .get("http://localhost:3000/api/parkings/parkedSpots")
      .then((res) => {
        console.log("parkings : ", res.data);
        setParkingSpots(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    setInterval(() => {
      setTime(new Date().toLocaleTimeString("en-US"));
    });
  });

  const navigate = useNavigate();

  const getParkingSpot = (ownerId: String) => {
    const spot = parkingSpots.find((spot) => spot.ownerId === ownerId);
    return spot?.parkingSpot;
  };

  const getCheckIn = (ownerId: String) => {
    const spot = parkingSpots.find((spot) => spot.ownerId === ownerId);
    return spot?.checkIn || new Date();
  };
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
          <div className="badge bg-info bg-opacity-75">
            <p className="display-6 px-2 pt-2">{time}</p>
          </div>
          <table className="table">
            <thead>
              <tr style={{ backgroundColor: "red" }}>
                <th className="bg-info-subtle" scope="col">
                  Entry Id
                </th>
                <th className="bg-info-subtle" scope="col">
                  Image
                </th>
                <th className="bg-info-subtle" scope="col">
                  License Number
                </th>
                <th className="bg-info-subtle" scope="col">
                  Entry Time
                </th>
                <th className="bg-info-subtle" scope="col">
                  Parked Location
                </th>
                <th className="bg-info-subtle" scope="col"></th>
              </tr>
            </thead>
            <tbody>
              {users &&
                users.map((vehicle) => (
                  <tr key={vehicle._id + "12345"}>
                    <th scope="row">{vehicle._id.substring(18)}</th>
                    <td>vehicle.image</td>
                    <td>{vehicle.vehicle.licenseNumber}</td>
                    <td>
                      {new Date(getCheckIn(vehicle._id)).toLocaleTimeString(
                        "en-US"
                      )}
                    </td>
                    <td>{getParkingSpot(vehicle._id)}</td>
                    <td>
                      <button
                        type="button"
                        className="btn btn-info"
                        onClick={() => {
                          navigate(`/parking-details/${vehicle._id}`);
                        }}
                      >
                        View Details
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default ParkedVehicles;
