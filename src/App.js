import "./App.css";
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
import StaffDashboard from "../src/pages/dashboardStaffPage/DashboardStaff";
import "bootstrap/dist/css/bootstrap.min.css";
import Sidebar from "./components/sidebar/sidebar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* <Sidebar /> */}
        <Routes>
          {/* <Route path="/" element={<MenuLogin />} /> */}
          <Route path="/dashboardStaff" element={<StaffDashboard />} />
          {/* <Route
            path="/dashboardStaff/manageAccount"
            element={<PageAdminManageAccount />}
          />
          <Route
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
