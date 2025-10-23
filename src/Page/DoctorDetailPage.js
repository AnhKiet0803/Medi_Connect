import React, { useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import doctorsData from "../data/doctors.json";
import AuthContext from "../Context/Context"; // ✅ Thêm dòng này
import "bootstrap/dist/css/bootstrap.min.css";

function DoctorDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useContext(AuthContext); // ✅ Lấy thông tin người dùng đăng nhập từ context

  const doctor = doctorsData.find((doc) => doc.id === parseInt(id));

  // ✅ Generate the next 7 days
  const today = new Date();
  const next7Days = Array.from({ length: 7 }, (_, i) => {
    const date = new Date();
    date.setDate(today.getDate() + i);
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return {
      day: days[date.getDay()],
      date: date.getDate(),
      month: date.getMonth() + 1,
      fullDate: date.toISOString().split("T")[0],
    };
  });

  const [selectedDate, setSelectedDate] = useState(next7Days[0].fullDate);
  const [selectedTime, setSelectedTime] = useState(null);

  const scheduleTimes = [
    "07:30 - 08:00",
    "08:00 - 08:30",
    "08:30 - 09:00",
    "09:00 - 09:30",
    "09:30 - 10:00",
  ];

  if (!doctor) {
    return (
      <div className="container my-5 text-center">
        <h3>Doctor not found.</h3>
        <button
          className="btn btn-outline-primary mt-3"
          onClick={() => navigate("/")}
        >
          Back to Home
        </button>
      </div>
    );
  }

  // ✅ Handle confirm appointment
  const handleConfirmAppointment = () => {
    if (!selectedDate || !selectedTime) {
      alert("⚠️ Please select both date and time before confirming.");
      return;
    }

    // ✅ Kiểm tra xem người dùng đã đăng nhập chưa
    if (!user) {
      alert("⚠️ Please log in to book an appointment.");
      navigate("/login"); // 👉 Nếu chưa đăng nhập, quay lại trang login
      return;
    }

    // 👉 Nếu đã đăng nhập thì chuyển tiếp tới trang xác nhận
    navigate("/confirm-appointment", {
      state: {
        doctor,
        selectedDate,
        selectedTime,
      },
    });
  };

  return (
    <div className="container my-5">
      <button
        className="btn btn-outline-secondary mb-3"
        onClick={() => navigate(-1)}
      >
        ← Back
      </button>

      <div className="card shadow-sm p-4">
        {/* --- Doctor Profile --- */}
        <div className="row align-items-center">
          <div className="col-md-3 text-center">
            <img
              src={doctor.image}
              alt={doctor.name}
              className="img-fluid rounded"
              style={{ maxHeight: "220px", objectFit: "cover" }}
            />
          </div>
          <div className="col-md-9">
            <h3 className="fw-bold text-primary">{doctor.name}</h3>
            <p className="mb-1">{doctor.specialty}</p>
            <p className="text-muted">{doctor.hospital}</p>
            <p>
              <strong>Clinical Experience:</strong> Over 15 years of
              professional medical practice.
            </p>
            <p>
              <strong>Location:</strong> Ho Chi Minh City, Vietnam
            </p>
          </div>
        </div>

        <hr />

        {/* --- Select Appointment Date --- */}
        <h5 className="fw-bold mt-3 mb-2">Select Appointment Date</h5>
        <div className="d-flex overflow-auto mb-4 gap-2">
          {next7Days.map((day, index) => (
            <div
              key={index}
              className={`border rounded p-2 text-center flex-shrink-0 ${
                selectedDate === day.fullDate
                  ? "bg-primary text-white"
                  : "bg-light"
              }`}
              style={{ width: "90px", cursor: "pointer" }}
              onClick={() => {
                setSelectedDate(day.fullDate);
                setSelectedTime(null);
              }}
            >
              <div className="fw-bold">{day.day}</div>
              <div>
                {day.date}/{day.month}
              </div>
            </div>
          ))}
        </div>

        {/* --- Select Time Slot --- */}
        <h5 className="fw-bold mt-3 mb-2">Select Time Slot</h5>
        <div className="d-flex flex-wrap gap-2 mb-4">
          {scheduleTimes.map((time, index) => (
            <button
              key={index}
              className={`btn ${
                selectedTime === time ? "btn-primary" : "btn-outline-primary"
              }`}
              onClick={() => setSelectedTime(time)}
            >
              {time}
            </button>
          ))}
        </div>

        {/* --- Appointment Summary --- */}
        <div className="border-top pt-3">
          <p>
            <strong>Selected Date:</strong> {selectedDate}
          </p>
          <p>
            <strong>Selected Time:</strong>{" "}
            {selectedTime || "No time selected"}
          </p>
          <p>
            <strong>Clinic Address:</strong> {doctor.hospital}
          </p>
          <p>
            <strong>Consultation Fee:</strong> 100$
          </p>

          <button
            className="btn btn-success"
            disabled={!selectedDate || !selectedTime}
            onClick={handleConfirmAppointment}
          >
            Confirm Appointment
          </button>
        </div>
      </div>
    </div>
  );
}

export default DoctorDetailPage;
