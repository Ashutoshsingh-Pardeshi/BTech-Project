import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.css";
import ParkedVehicles from "./components/ParkedVehicles";
import ViewDetails from "./components/ViewDetails";
import PaymentDetails from "./components/PaymentDetails";

function App() {
  return (
    <>
      <Navbar />
      <ParkedVehicles />
      <ViewDetails />
      <PaymentDetails />
    </>
  );
}

export default App;
