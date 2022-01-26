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
import NurseListPrescription from "./components/NurseListPrescriptionComponents/NurseListPrescription";
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
import MedicalRecordConsulNurse from "./components/MedicalRecordComponents/MedicalRecordConsulNurse";
import FormConsul from "./components/FormPatient/FormConsul";
import ProfileStaff from "./components/ViewProfile/ProfileStaff";
import ProfileDoctor from "./components/ViewProfile/ProfileDoctor";
import ProfileNurse from "./components/ViewProfile/ProfileNurse";
import FormPatientRegis from "./components/FormPatient/FormPatientRegis";
import CardListPatient from "./components/CardListPatientDoctorComponents/CardListPatient";
import CardListPatientForNurse from "./components/CardListPatientDoctorComponents/CardListPatientForNurse";
// import ProfileDoctor from "./components/ViewProfile/ProfileDoctor";
// import ProfileNurse from "./components/ViewProfile/ProfileNurse";
// import ProfileStaff from "./components/ViewProfile/ProfileStaff";
import DashboardNursePage from "./pages/dashboardNursePage/DashboardNursePage";
import InputMedicinePage from "./pages/inputMedicinePage/InputMedicinePage";
import WorkDayHour from "./pages/workDayHourPage/WorkDayHour";

import MedicalRecordonDoctor from './components/MedicalRecordComponents/MedicalRecordonDoctor'
import FormUpdatePrescription from "./components/FormAddPrescriptionComponents/FormUpdatePrescription";

import FormUpdateProfileNurse from "./components/formUpdateProfileNurseComponents/FormUpdateProfileNurse";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import ForgetPassDoctor from "./components/ForgetPasswordComponents/ForgetPassDoctor";
import ForgetPassNurse from "./components/ForgetPasswordComponents/ForgetPassNurse";
import ForgetPassStaff from "./components/ForgetPasswordComponents/ForgetPassStaff";
import FormNurseRegis from "./components/FormDoctorRegisComponents/FormNurseRegis";

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
              <Route
                path="/updateProfileNurse"
                element={<FormUpdateProfileNurse />}
              />
              <Route path="/listPrescription" element={<ListPrescription />} />
              <Route
                path="/nurseListPrescription"
                element={<NurseListPrescription />}
              />
              <Route path="/medicalRecord/:uuid" element={<MedicalRecord />} />
              <Route path="/medicalRecordPatient/:uuid" element={<MedicalRecordonDoctor />} />
              <Route
                path="/medicalRecordConsultation/:uuid"
                element={<MedicalRecordConsul />}
              />
              <Route path="/medicalRecordConsulNurse" element={<MedicalRecordConsulNurse/>} />
              <Route
                path="/addPrescription"
                element={<FormAddPrescription />}
              />

              <Route
                path="/updatePrescription"
                element={<FormUpdatePrescription />}
              />

              <Route path="/dashboardNurse" element={<DashboardNursePage />} />
              <Route path="/listWorkDayHour" element={<WorkDayHour />} />


              <Route path="/listMedicine" element={<InputMedicinePage />} />

              <Route path="/inputConsultation/:uuid" element={<FormConsul />} />
              <Route path="/listPatient" element={<CardListPatientDoctor />} />
              <Route path="/listDoctor" element={<CardListDoctor />} />
              <Route path="/listNurse" element={<CardListNurse />} />
              <Route path="/listStaff" element={<CardListStaff />} />
              <Route path="/listPatienDoctor" element={<CardListPatient />} />
              <Route path="/registrasiDoctor" element={<FormDoctorRegis />} />
              <Route path="/registrasiStaff" element={<FormStaffRegis />} />
              <Route path="/registrasiNurse" element={<FormNurseRegis />} />
              <Route path="/registrasiPatient" element={<FormPatientRegis />} />
              
              <Route path="/forgetPassDoctor" element={<ForgetPassDoctor />} />
              <Route path="/forgetPassNurse" element={<ForgetPassNurse />} />
              <Route path="/forgetPassStaff" element={<ForgetPassStaff />} />

              <Route
                path="/listPatientDoctorForNurse"
                element={<CardListPatientForNurse />}
              />

              <Route path="/profileStaff/:uuid" element={<ProfileStaff />} />
              <Route path="/profileDoctor/:uuid" element={<ProfileDoctor />} />
              <Route path="/profileNurse/:uuid" element={<ProfileNurse />} />
              <Route path="/dashboardStaff" element={<StaffDashboard />} />
              <Route path="/allSchedules" element={<AllSchedulesPage />} />
              <Route path="/manageAccount" element={<ManageAccount />} />
              <Route
                path="/profileUpdateStaff"
                element={<StaffProfilePage />}
              />
              <Route
                path="/viewprofileStaff"
                element={<ViewStaffProfilePage />}
              />
              <Route path="*" element={<ErrorPage />} />
            </Routes>

              
          </BrowserRouter>
        </PersistGate>
      </Provider>
    </div>
  );
}

export default App;
