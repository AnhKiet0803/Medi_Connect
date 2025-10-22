import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import HomePage from './Page/HomePage';
import Header from './Components/Header';
import Login from './Page/Login';
import Register from './Page/Register';
import { AuthProvider } from './Context/Context';
import DoctorDashboard from "./Page/Doctor/DoctorDashboard";
import DoctorProfile from './Page/Doctor/DoctorProfile';
import DoctorAppointments from './Page/Doctor/DoctorAppointment';
import DoctorNotifications from './Page/Doctor/DoctorNotifications';
function App() {
  return (
    <AuthProvider>
      <div className="App">
        <Header/>
        <main>
          <div className="container">
            <Routes>
              <Route path="/" element={<HomePage/>} />
              <Route path="/login" element={<Login/>} />
              <Route path="/register" element={<Register/>} />

              {/* Doctor routes */}
              <Route path="/doctor/dashboard" element={<DoctorDashboard/>}/>
              <Route path="/doctor/profile" element={<DoctorProfile/>}/>
              <Route path="/doctor/appointments" element={<DoctorAppointments/>}/>
              <Route path="/doctor/notifications" element={<DoctorNotifications/>} />
            </Routes>
          </div>
        </main>
      </div>
    </AuthProvider>
  );
}

export default App;
