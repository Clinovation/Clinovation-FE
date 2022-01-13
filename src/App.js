import "./App.css";
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
import StaffDashboard from "../src/pages/dashboardStaffPage/DashboardStaff";
import "bootstrap/dist/css/bootstrap.min.css";
import Sidebar from "./components/sidebar/sidebar";
import AllSchedulesPage from "./pages/allSchedulePage/AllSchedulesPage";
import ManageAccount from "./pages/manageAccountPage/ManageAccount";
import StaffProfilePage from "./pages/StaffProfilePage/StaffProfilePage";
import ViewStaffProfilePage from "./pages/viewStaffProfile/ViewStaffProfilePage"
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* <Sidebar /> */}
        <Routes>
          {/* <Route path="/" element={<MenuLogin />} /> */}
          <Route path="/dashboardStaff" element={<StaffDashboard />} />
          <Route
            path="/dashboardStaff/allSchedules"
            element={<AllSchedulesPage />}
          />
          <Route
            path="/dashboardStaff/manageAccount"
            element={<ManageAccount />}
          />
          <Route
            path="/dashboardStaff/profileStaff"
            element={<StaffProfilePage />}
          />
          <Route
            path="/dashboardStaff/viewprofileStaff"
            element={<ViewStaffProfilePage />}
          />
        </Routes>
        {/* <MenuLogin /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
