import "./App.css";
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import Sidebar from "./components/sidebar/sidebar";
import StaffProfilePage from "./pages/StaffProfilePage/StaffProfilePage";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* <Sidebar /> */}
        <Routes>
          {/* <Route path="/" element={<MenuLogin />} /> */}
          {/* <Route path="/dashboardStaff" element={<StaffDashboard />} /> */}
          {/* <Route
            path="/dashboardStaff/manageAccount"
            element={<PageAdminManageAccount />}
          />
          <Route
            path="/dashboardStaff/allSchedules"
            element={<AllSchedules />}
          /> */}
          {/* <Route
            path="/dashboardStaff/allSchedules"
            element={<AllSchedulesPage />}
          /> */}
          <Route path="/dashboardStaff/ProfileStaff" element={<StaffProfilePage/>}/>
        </Routes>
        {/* <MenuLogin /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
