import React from "react";
import { useNavigate } from "react-router-dom";
import doctorsData from "../data/doctors.json";
import "bootstrap/dist/css/bootstrap.min.css";
import "../index.css";

function AllDoctorsPage() {
  const navigate = useNavigate();

  return (
    <div className="container my-5">
      <h2 className="text-center fw-bold text-primary mb-4">
        Our Certified Medical Specialists
      </h2>
      <p className="text-center text-muted mb-5">
        Browse our team of experienced physicians and book your consultation.
      </p>
      <div className="row g-4">
        {doctorsData.map((doctor) => (
          <div key={doctor.id} className="col-12 col-sm-6 col-md-4 col-lg-3">
            <div className="card h-100 shadow-sm border-0">
              <img src={doctor.image} className="card-img-top" alt={doctor.name} style={{ height: "220px",objectFit: "cover",borderTopLeftRadius: "8px",borderTopRightRadius: "8px",}}/>
              <div className="card-body text-center">
                <h5 className="card-title mb-1 text-dark">{doctor.name}</h5>
                <p className="text-muted mb-1">{doctor.specialty}</p>
                <p className="small text-secondary">{doctor.hospital}</p>
              </div>
              <div className="card-footer bg-white border-0 text-center pb-3">
                <button className="btn btn-primary btn-sm" onClick={() => navigate(`/doctor/${doctor.id}`)}>Book Appointment</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AllDoctorsPage;
