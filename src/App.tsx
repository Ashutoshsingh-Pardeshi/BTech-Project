import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.css";
import ParkedVehicles from "./components/ParkedVehicles";
import ViewDetails from "./components/ViewDetails";

function App() {
  return (
    <>
      <Navbar />
      <ParkedVehicles />
      <ViewDetails />
    </>
  );
}

export default App;
