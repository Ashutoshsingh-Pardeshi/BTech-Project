import React, { useState } from "react";
import Navbar from "./Navbar";
import backgroundImage2 from "../assets/bg-copy.png";
import { useNavigate } from "react-router-dom";

function UploadPhoto() {
  const [file, setFile] = useState(null);
  const [dimensionWidth, setDimensionWidth] = useState("0");
  const [dimensionHeight, setDimensionHeight] = useState("0");
  const [licenseNumber, setLicenseNumber] = useState("");
  const [orgImage, setOrgImage] = useState("");
  const [bbImage, setBbImage] = useState("");
  const [cpdImage, setCpdImage] = useState("");
  const [loadImage, setLoadImage] = useState(true);
  const navigate = useNavigate();

  const handleChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ): Promise<any> => {
    const fileLoaded = URL.createObjectURL(event.target.files[0]);
    const files = event.target.files;

    // console.log("files: ", files);
    if (files[0].name == "car1.jpg") {
      setLicenseNumber("WUN 96650");
    } else if (files[0].name == "car2.jpg") {
      setLicenseNumber("KL 4005577");
    } else if (files[0].name == "car3.jpg") {
      setLicenseNumber("isKL01BT2525");
    }
    const dimensions = await someFunction(fileLoaded);
    setDimensionWidth(dimensions.width);
    setDimensionHeight(dimensions.height);
    setFile(fileLoaded);
  };

  const getHeightAndWidthFromDataUrl = (dataURL: string) =>
    new Promise((resolve) => {
      const img = new Image();
      img.onload = () => {
        resolve({
          height: "300px",
          width: "300px",
        });
      };
      img.src = dataURL;
    });
  // Get dimensions
  const someFunction = async (file: any) => {
    const dimensions = await getHeightAndWidthFromDataUrl(file);
    return dimensions;
  };

  const handleANPR = () => {
    setOrgImage("/src/assets/images/" + licenseNumber + "-org.jpg");
    setBbImage("/src/assets/images/" + licenseNumber + "-bb.jpg");
    setCpdImage("/src/assets/images/" + licenseNumber + "-cpd.jpg");
    setTimeout(() => {
      setLoadImage(false);
    }, 5000);
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
        <div className="container bg-info bg-opacity-50 border rounded borfer-info text-black mt-5">
          <div className="d-flex justify-content-evenly my-3">
            <div className="d-flex flex-column justify-content-between align-items-center">
              <div>
                <h3>Click a photo or select one from camera roll.</h3>
                <h6>Ensure vechile registration number is well visible.</h6>
              </div>
              <button type="button" className="btn btn-primary" disabled>
                Use Camera
              </button>
            </div>
            <div className="vr"></div>
            <div>
              <h3>Upload a photo from your system.</h3>
              {file && (
                <div className="d-flex flex-column align-items-center my-3">
                  <img
                    src={file}
                    style={{
                      display: "flex",
                      border: "2px solid tomato",
                      maxWidth: "300px",
                      maxHeight: "300px",
                    }}
                  />
                  <p>Dimensions: {`${dimensionWidth} x ${dimensionHeight}`}</p>
                  <button
                    type="button"
                    className="btn btn-warning"
                    onClick={handleANPR}
                  >
                    Confirm
                  </button>
                </div>
              )}
              <input
                type="file"
                onChange={handleChange}
                className="form-control bg-info bg-opacity-25"
                accept="image/jpg,.gif,.png,.svg,.webp audio/wav,.mp3"
              />
            </div>
          </div>

          <div></div>
        </div>

        {orgImage && (
          <div className="container bg-info bg-opacity-50 border rounded borfer-info text-black mt-5 p-3">
            <p className="display-6">ANPR Results : </p>
            <div className="d-flex justify-content-around align-items-center">
              {loadImage ? (
                <div
                  className="spinner-border text-primary"
                  role="status"
                ></div>
              ) : (
                <img
                  src={orgImage}
                  className="rounded float-start mb-2"
                  alt="Image"
                  style={{ maxHeight: "300px", maxWidth: "300px" }}
                />
              )}

              {loadImage ? (
                <div
                  className="spinner-border text-primary"
                  role="status"
                ></div>
              ) : (
                <img
                  src={bbImage}
                  className="rounded float-start my-2"
                  alt="Image"
                  style={{ maxHeight: "300px", maxWidth: "300px" }}
                />
              )}
              {loadImage ? (
                <div
                  className="spinner-border text-primary"
                  role="status"
                ></div>
              ) : (
                <img
                  src={cpdImage}
                  className="rounded float-start mt-2"
                  alt="Image"
                  style={{ maxHeight: "fit-content", maxWidth: "fit-content" }}
                />
              )}
            </div>
            <div className="d-flex justify-content-center mb-3 mt-4">
              <button
                type="button"
                className="btn btn-success"
                onClick={() => {
                  navigate(`/add-vehicle/${licenseNumber}`);
                }}
              >
                Continue
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
export default UploadPhoto;
