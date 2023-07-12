import { createBrowserRouter } from "react-router-dom";
import Home from "./Home";
import ParkedVehicles from "./ParkedVehicles";
import ViewDetails from "./ViewDetails";
import PaymentDetails from "./PaymentDetails";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/parked-vehicles", element: <ParkedVehicles /> },
  { path: "/parking-details/:id", element: <ViewDetails /> },
  { path: "/check-out/:id", element: <PaymentDetails /> },
]);

export default router;
