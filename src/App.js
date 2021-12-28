import "./App.css";
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
import StaffDashboard from "../src/pages/dashboardStaffPage/DashboardStaff";
import "bootstrap/dist/css/bootstrap.min.css";
import Sidebar from "./components/sidebar/sidebar";
import ManageAccount from "./pages/manageAccountPage/ManageAccount";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* <Sidebar /> */}
        <Routes>
          {/* <Route path="/" element={<MenuLogin />} /> */}
          {/* <Route path="/dashboardStaff" element={<StaffDashboard />} /> */}
          <Route
            path="/dashboardStaff/manageAccount"
            element={<ManageAccount />}
          />
          {/* <Route
            path="/dashboardStaff/allSchedules"
            element={<AllSchedules />}
          /> */}
        </Routes>
        {/* <MenuLogin /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
