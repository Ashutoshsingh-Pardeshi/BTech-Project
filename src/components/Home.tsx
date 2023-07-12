import Navbar from "./Navbar";
import backgroundImage2 from "../assets/bg-copy.png";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [date, setDate] = useState(new Date().toDateString());
  const [time, setTime] = useState(new Date().toLocaleTimeString("en-US"));

  const navigate = useNavigate();

  useEffect(() => {
    setInterval(() => {
      setDate(new Date().toDateString()),
        setTime(new Date().toLocaleTimeString("en-US"));
    });
  });
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
            <button
              type="button"
              className="btn btn-warning pt-3 pb-4"
              onClick={() => {
                navigate("/parked-vehicles");
              }}
            >
              <span className="display-6 p-5">Add new vehicle</span>
            </button>
          </div>
          {/* </div> */}
        </div>
      </div>
    </>
  );
};

export default Home;
