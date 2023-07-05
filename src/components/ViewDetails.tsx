const ViewDetails = () => {
  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-4">
          <img
            src="..."
            className="rounded float-start"
            alt="Image"
            style={{ maxHeight: "300px", maxWidth: "300px" }}
          ></img>
        </div>
        <div className="col-8">
          {/* Owner Details */}
          <div className="card mb-2">
            <figure className="text-center">
              <h1 className="display-6 pt-2">Owner Details</h1>
            </figure>
            <div className="card-body">
              <div className="row ">
                <div className="col-2">
                  <p className="h6">Full Name :</p>
                </div>
                <div className="col-10">
                  <p className="h6">John Matt Doe</p>
                </div>

                <div className="col-2">
                  <p className="h6">Address :</p>
                </div>
                <div className="col-10">
                  <p className="h6">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
                    delectus suscipit ullam quaerat sequi illo recusandae, quae
                    corrupti! Nihil, explicabo saepe nisi a libero soluta minima
                    numquam iste! Ut, quisquam!
                  </p>
                </div>

                <div className="col-2">
                  <p className="h6">City :</p>
                </div>
                <div className="col-4">
                  <p className="h6">Pune</p>
                </div>

                <div className="col-2">
                  <p className="h6">State :</p>
                </div>
                <div className="col-3">
                  <p className="h6">Maharashtra</p>
                </div>

                <div className="col-2">
                  <p className="h6">Pincode :</p>
                </div>
                <div className="col-10">
                  <p className="h6">67890</p>
                </div>

                <div className="col-2">
                  <p className="h6">Date of Birth </p>
                </div>
                <div className="col-3">
                  <p className="h6">01/01/1990</p>
                </div>

                <div className="col-3">
                  <p className="h6">Phone Number :</p>
                </div>
                <div className="col-3">
                  <p className="h6">+91 12345 67890</p>
                </div>
              </div>
            </div>
          </div>

          {/* Vehicle Details */}
          <div className="card my-2">
            <figure className="text-center">
              <h1 className="display-6 pt-2">Vehicle Details</h1>
            </figure>

            <div className="card-body">
              <div className="row">
                <div className="col-3">
                  <p className="h6">License Number :</p>
                </div>
                <div className="col-3">
                  <p className="h6">MH 12 DE 2143</p>
                </div>

                <div className="col-3">
                  <p className="h6">Registration Number </p>
                </div>
                <div className="col-3">
                  <p className="h6">21XXXXXXXX90 </p>
                </div>

                <div className="col-3">
                  <p className="h6">Registration Date : </p>
                </div>
                <div className="col-3">
                  <p className="h6">01/01/1990 </p>
                </div>

                <div className="col-3">
                  <p className="h6">Registration Date : </p>
                </div>
                <div className="col-3">
                  <p className="h6">01/01/2990</p>
                </div>
              </div>
            </div>
          </div>

          {/* Parking Details */}
          <div className="card my-2">
            <figure className="text-center">
              <h1 className="display-6 pt-2">Parking Details</h1>
            </figure>

            <div className="card-body">
              <div className="row">
                <div className="col-3">
                  <p className="h6">Check In Time :</p>
                </div>
                <div className="col-3">
                  <p className="h6">1:00 pm</p>
                </div>

                <div className="col-3">
                  <p className="h6">Parked Spot : </p>
                </div>
                <div className="col-3">
                  <p className="h6">A9 </p>
                </div>

                <div className="col-5"></div>
                <div className="col-4">
                  <button type="button" className="btn btn-warning">
                    Check Out
                  </button>
                </div>
                <div className="col-4"></div>
              </div>
            </div>
          </div>

          <div className="d-flex justify-content-center my-3">
            <button type="button" className="btn btn-primary">
              Go back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewDetails;
