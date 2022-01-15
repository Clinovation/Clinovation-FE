import "./App.css";
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
import StaffDashboard from "../src/pages/dashboardStaffPage/DashboardStaff";
import "bootstrap/dist/css/bootstrap.min.css";
import Sidebar from "./components/sidebar/sidebar";
import AllSchedulesPage from "./pages/allSchedulePage/AllSchedulesPage";
import ManageAccount from "./pages/manageAccountPage/ManageAccount";
import StaffProfilePage from "./pages/StaffProfilePage/StaffProfilePage";
import ViewStaffProfilePage from "./pages/viewStaffProfile/ViewStaffProfilePage"
import MenuLogin from "./pages/menuLoginPage/MenuLogin";
 import DashboardDoctor from "./pages/dashboardDoctorPage/DashboardDoctor";
import FormUpdateProfileDoctor from "./components/FormUpdateProfileDoctorComponents/FormUpdateProfileDoctor";
import ListPrescription from "./components/ListPrescriptionComponents/ListPrescription";
import FormAddPrescription from "./components/FormAddPrescriptionComponents/FormAddPrescription";
import CardListPatientDoctor from "./components/CardListPatientDoctorComponents/CardListPatientDoctor";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* <Sidebar /> */}
        <Routes>
          <Route path="/" element={<MenuLogin />} />

          <Route path="/dashboardDoctor" element={<DashboardDoctor />} />
          <Route path="/updateProfileDoctor" element={<FormUpdateProfileDoctor />} />
          <Route path="/listPrescription" element={<ListPrescription />} />
          <Route path="/addPrescription" element={<FormAddPrescription />} />
          <Route path="/listPatient" element={<CardListPatientDoctor />} />

          <Route path="/dashboardStaff" element={<StaffDashboard />} />
          <Route
            path="/allSchedules"
            element={<AllSchedulesPage />}
          />
          <Route
            path="/manageAccount"
            element={<ManageAccount />}
          />
          <Route
            path="/profileStaff"
            element={<StaffProfilePage />}
          />
          <Route
            path="/viewprofileStaff"
            element={<ViewStaffProfilePage />}
          />
        </Routes>
        {/* <MenuLogin /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
