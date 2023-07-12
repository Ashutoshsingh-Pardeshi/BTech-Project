import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { RouterProvider } from "react-router-dom";
import router from "./components/router";

function App() {
  return (
    <>
      {/* <Navbar /> */}
      <RouterProvider router={router} />
      {/* <ParkedVehicles />
       <ViewDetails />
       <PaymentDetails /> */}
    </>
  );
}

export default App;
