import "./App.css";
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
import StaffDashboard from "../src/pages/dashboardStaffPage/DashboardStaff";
import "bootstrap/dist/css/bootstrap.min.css";
import Sidebar from "./components/sidebar/sidebar";
import AllSchedulesPage from "./pages/allSchedulePage/AllSchedulesPage";
import ManageAccount from "./pages/manageAccountPage/ManageAccount";
import StaffProfilePage from "./pages/StaffProfilePage/StaffProfilePage";
import ViewStaffProfilePage from "./pages/viewStaffProfile/ViewStaffProfilePage";
import MenuLogin from "./pages/menuLoginPage/MenuLogin";
import DashboardDoctor from "./pages/dashboardDoctorPage/DashboardDoctor";
import FormUpdateProfileDoctor from "./components/FormUpdateProfileDoctorComponents/FormUpdateProfileDoctor";
import ListPrescription from "./components/ListPrescriptionComponents/ListPrescription";
import FormAddPrescription from "./components/FormAddPrescriptionComponents/FormAddPrescription";
import CardListPatientDoctor from "./components/CardListPatientDoctorComponents/CardListPatientDoctor";
import { store, persistor } from "./Redux/Store";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import FormDoctorRegis from "./components/FormDoctorRegisComponents/FormDoctorRegis";
import FormStaffRegis from "./components/FormStaffRegisComponents/FormStaffRegis";
import CardListDoctor from "./components/CardListPatientDoctorComponents/CardListDoctor";
import CardListNurse from "./components/CardListPatientDoctorComponents/CardListNurse";
import CardListStaff from "./components/CardListPatientDoctorComponents/CardListStaff";
import MedicalRecord from "./components/MedicalRecordComponents/MedicalRecord";
import MedicalRecordConsul from "./components/MedicalRecordComponents/MedicalRecordConsul";
import FormConsul from "./components/FormPatient/FormConsul";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <BrowserRouter>
            {/* <Sidebar /> */}
            <Routes>
              <Route path="/" element={<MenuLogin />} />

              <Route path="/dashboardDoctor" element={<DashboardDoctor />} />
              <Route
                path="/updateProfileDoctor"
                element={<FormUpdateProfileDoctor />}
              />
              <Route path="/listPrescription" element={<ListPrescription />} />
              <Route path="/medicalRecord" element={<MedicalRecord />} />
              <Route path="/medicalRecordConsultation" element={<MedicalRecordConsul />} />
              <Route
                path="/addPrescription"
                element={<FormAddPrescription />}
              />
              <Route path="/inputConsultation" element={<FormConsul />} />
              <Route path="/listPatient" element={<CardListPatientDoctor />} />
              <Route path="/listDoctor" element={<CardListDoctor />} />
              <Route path="/listNurse" element={<CardListNurse />} />
              <Route path="/listStaff" element={<CardListStaff />} />
              <Route path="/registrasiDoctor" element={<FormDoctorRegis />} />
              <Route path="/registrasiStaff" element={<FormStaffRegis />} />

              <Route path="/dashboardStaff" element={<StaffDashboard />} />
              <Route path="/allSchedules" element={<AllSchedulesPage />} />
              <Route path="/manageAccount" element={<ManageAccount />} />
              <Route path="/profileStaff" element={<StaffProfilePage />} />
              <Route
                path="/viewprofileStaff"
                element={<ViewStaffProfilePage />}
              />
            </Routes>
            {/* <MenuLogin /> */}
          </BrowserRouter>
        </PersistGate>
      </Provider>
    </div>
  );
}

export default App;
