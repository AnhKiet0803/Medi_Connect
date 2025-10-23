import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function ConfirmAppointmentPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const { doctor, selectedDate, selectedTime } = location.state || {};
  const [isConfirmed, setIsConfirmed] = useState(false);

  if (!doctor) {
    return (
      <div className="container my-5 text-center">
        <h4>No appointment details found.</h4>
        <button
          className="btn btn-outline-primary mt-3"
          onClick={() => navigate("/")}
        >
          Back to Home
        </button>
      </div>
    );
  }

  return (
    <div className="container my-5">
      <div className="card shadow p-4 mx-auto" style={{ maxWidth: "600px" }}>
        <h3 className="text-center text-primary mb-4">Confirm Appointment</h3>
        {!isConfirmed ? (
          <>
            <p><strong>Doctor:</strong> {doctor.name}</p>
            <p><strong>Specialty:</strong> {doctor.specialty}</p>
            <p><strong>Hospital:</strong> {doctor.hospital}</p>
            <p><strong>Date:</strong> {selectedDate}</p>
            <p><strong>Time:</strong> {selectedTime}</p>
            <p><strong>Consultation Fee:</strong> 100$</p>
            <div className="text-center mt-4">
              <button className="btn btn-success px-4" onClick={() => setIsConfirmed(true)}>Confirm Now</button>
              <button className="btn btn-outline-secondary ms-2" onClick={() => navigate(-1)}>Back</button>
            </div>
          </>
        ) : (
          <div className="text-center">
            <div className="alert alert-success" role="alert">
              <strong>Appointment successfully booked!</strong>
            </div>
            <p>Thank you for choosing our service.</p>
            <button className="btn btn-primary mt-3" onClick={() => navigate("/")}>Back to Home</button>
          </div>
        )}
      </div>
    </div>
  );
}
export default ConfirmAppointmentPage;
