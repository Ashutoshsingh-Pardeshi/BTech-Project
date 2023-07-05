import { useState } from "react";
import { LuParkingSquare } from "react-icons/lu";

const Navbar = () => {
  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => {
    setExpanded(!expanded);
  };

  return (
    <nav
      className="navbar navbar-expand-lg bg-info"
      //   style={{ color: "white", backgroundColor: "green" }}
    >
      <div className="container-fluid">
        <LuParkingSquare size={28} className="mx-1" />
        Parking System
        <button className="navbar-toggler" type="button" onClick={handleToggle}>
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className={"ps-3 navbar-collapse " + (expanded ? "show" : "collapse")}
        >
          <div className="navbar-nav">
            <a className="nav-link" aria-current="page" href="#">
              View All
            </a>
            <a className="nav-link" href="#">
              Add New Entry
            </a>
            <a className="nav-link" href="#">
              Pricing Details
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
