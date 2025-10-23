import React from "react";
import "../index.css";
import BookingDoctorSection from "../Components/BookingDoctorSection";

function HomePage() {
  return (
    <>
      <section id="main-search" className="home-banner">
        <div className="banner-inner">
          <div className="banner-text">
            <h1>Medical Appointment Platform</h1>
            <p>
              Book consultations with over 1,000 doctors, 25 hospitals, and 100 clinics on MediConnect.
              <br />
              Reserve your appointment time and secure your queue number in advance.
            </p>
            <div className="search-box">
              <form method="GET" action="https://youmed.vn/dat-kham/search" className="search-form">
                <input name="q" type="search" placeholder="Symptoms, doctors, hospitals..."/>
                <input type="hidden" name="type" value="all" />
                <button aria-label="Search" type="submit">
                  <img src="https://cdn.youmed.vn/wp-content/themes/youmed/images/search.svg" alt="Search"/>
                </button>
              </form>
            </div>
          </div>
          <div className="banner-image">
            <img src="https://cdn.youmed.vn/wp-content/themes/youmed/images/your-medical-booking.webp" alt="Family healthcare illustration"/>
          </div>
        </div>
      </section>
      <section className="doctor-booking-section">
        <BookingDoctorSection />
      </section>
    </>
  );
}
export default HomePage;
