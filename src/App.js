import "./App.css";
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import Sidebar from "./components/sidebar/sidebar";
import AllSchedulesPage from "./pages/allSchedulePage.jsx/AllSchedulesPage";
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
          <Route
            path="/dashboardStaff/allSchedules"
            element={<AllSchedulesPage />}
          />
        </Routes>
        {/* <MenuLogin /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
