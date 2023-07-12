import Navbar from "./Navbar";
import backgroundImage2 from "../assets/bg-copy.png";

const AddVehicle = () => {
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
      </div>
    </>
  );
};

export default AddVehicle;
