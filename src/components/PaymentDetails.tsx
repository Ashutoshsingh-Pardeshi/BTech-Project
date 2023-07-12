import { AiOutlineFileDone } from "react-icons/ai";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";

const PaymentDetails = () => {
  const navigate = useNavigate();
  const checkOutTime = new Date().toLocaleTimeString("en-US");

  return (
    <>
      <Navbar />

      <div className="alert alert-success mx-5 mt-3">
        {/* {setTimeout(() => {
        <> */}
        <h4 className="alert-heading">
          <AiOutlineFileDone size={30} className="me-2" />
          Checked out successfully !
        </h4>
        <p>
          Vehicle number MH 12 DE 1234 has checked out successfully. The ticket
          cost is{" "}
          <span className="badge rounded-pill bg-success">₹ 10.3/-</span>
        </p>
        <hr />

        <h4>Parking Details</h4>
        <div className="row">
          <div className="col-2"> Check In Time : </div>
          <div className="col-9"> 1:00 pm </div>

          <div className="col-2"> Check Out Time : </div>
          <div className="col-9"> {checkOutTime} </div>

          <div className="col-2"> Parked Spot : </div>
          <div className="col-9"> A9 </div>
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
        {/* </>;
      }, 5000)} */}
      </div>
    </>
  );
};

export default PaymentDetails;
