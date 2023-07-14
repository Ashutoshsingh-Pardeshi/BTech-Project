import Navbar from "./Navbar";
import backgroundImage2 from "../assets/bg-copy.png";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ParkingSchema } from "../assets/common/ParkingInterface";
import axios from "axios";

const Home = () => {
  const [date, setDate] = useState(new Date().toDateString());
  const [time, setTime] = useState(new Date().toLocaleTimeString("en-US"));

  const [parkingSpots, setParkingSpots] = useState<ParkingSchema[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    setInterval(() => {
      setDate(new Date().toDateString()),
        setTime(new Date().toLocaleTimeString("en-US"));
    });
  });

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/parkings/availableSpots")
      .then((res) => {
        setParkingSpots(res.data);
      })
      .catch((err) => console.log(err));
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
        <div className="container bg-info bg-opacity-50 border rounded borfer-info text-black m-5">
          {/* <div> */}
          <p className="display-3">Welcome to Smart Parking System!</p>
          <hr />
          <p className="display-6 pt-3 ps-3">Today's date is {date}</p>
          <p className="display-6 pb-3 ps-3">
            The current time is :
            <span className="badge text-bg-light ms-2">{time}</span>
          </p>
          <hr />
          <div className="d-flex justify-content-around align-items-center my-5">
            <button
              type="button"
              className="btn btn-primary pt-3 pb-4"
              onClick={() => {
                navigate("/parked-vehicles");
              }}
            >
              <span className="display-6 p-3">View parked vehicles</span>
            </button>
            {parkingSpots && parkingSpots.length && (
              <button
                type="button"
                className={
                  "pt-3 pb-4 btn btn-" +
                  (parkingSpots && parkingSpots.length > 1
                    ? "warning"
                    : "danger")
                }
                onClick={() => {
                  navigate("/upload-image");
                }}
              >
                <span className="display-6 p-5">
                  {parkingSpots && parkingSpots.length > 1
                    ? "Add new vehicle"
                    : "Only 1 spot left"}
                </span>
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
