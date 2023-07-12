import { useState } from "react";
import { LuParkingSquare } from "react-icons/lu";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [expanded, setExpanded] = useState(false);

  const navigate = useNavigate();

  const handleToggle = () => {
    setExpanded(!expanded);
  };

  return (
    <nav
      className="navbar navbar-expand-lg bg-info"
      //   style={{ color: "white", backgroundColor: "green" }}
    >
      <div className="container-fluid">
        <span
          className="nav-link"
          onClick={() => {
            navigate("/");
          }}
        >
          <LuParkingSquare size={28} className="mx-1" />
          Parking System
        </span>
        <button className="navbar-toggler" type="button" onClick={handleToggle}>
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className={"ps-3 navbar-collapse " + (expanded ? "show" : "collapse")}
        >
          <div className="navbar-nav">
            <Link className="nav-link" to="/parked-vehicles">
              View All
            </Link>
            <Link className="nav-link" to="/parking-details">
              Add New Entry
            </Link>
            <Link className="nav-link" to="/check-out">
              Pricing Details
            </Link>
            <a className="nav-link" href="add-new"></a>
            <a className="nav-link" href="pricing"></a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
