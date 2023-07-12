import { createBrowserRouter } from "react-router-dom";
import Home from "./Home";
import ParkedVehicles from "./ParkedVehicles";
import ViewDetails from "./ViewDetails";
import PaymentDetails from "./PaymentDetails";
import AddVehicle from "./AddVehicle";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/parked-vehicles", element: <ParkedVehicles /> },
  { path: "/parking-details/:id", element: <ViewDetails /> },
  { path: "/check-out/:id", element: <PaymentDetails /> },
  { path: "/add-vehicle", element: <AddVehicle /> },
]);

export default router;
