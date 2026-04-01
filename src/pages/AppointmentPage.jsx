import React from 'react';
import AppointmentForm from '../components/AppointmentForm.jsx';
import heroImg from '../assets/Hospital/17-768x512.jpg';
import './AboutPage.css';
import './AppointmentPage.css';

export default function AppointmentPage() {
  return (
    <main style={{ paddingTop: 72 }}>
      <div className="page-banner" style={{ backgroundImage: `url(${heroImg})` }}>
        <div className="page-banner__overlay" />
        <div className="container page-banner__content">
          <h1>Book an Appointment</h1>
          <p>Choose your specialist and we'll confirm within 30 minutes</p>
        </div>
      </div>

      <section className="section-pad">
        <div className="container appt-page__inner">
          <div className="appt-page__info">
            <span className="section-tag">Schedule a Visit</span>
            <h2 className="section-title">Book your visit in<br />just a few steps.</h2>
            <p style={{ color: 'var(--text-muted)', lineHeight: 1.8, marginBottom: 28 }}>
              Fill in the form and select your preferred doctor and date. Our team will call you back within 30 minutes to confirm the appointment.
            </p>
            <div className="appt-page__steps">
              <div className="appt-page__step">
                <div className="appt-page__step-num">1</div>
                <div>
                  <strong>Fill the Form</strong>
                  <p>Enter your name, phone, and select a doctor</p>
                </div>
              </div>
              <div className="appt-page__step">
                <div className="appt-page__step-num">2</div>
                <div>
                  <strong>We Confirm</strong>
                  <p>Our team calls you back within 30 minutes</p>
                </div>
              </div>
              <div className="appt-page__step">
                <div className="appt-page__step-num">3</div>
                <div>
                  <strong>Visit Us</strong>
                  <p>Walk in at your scheduled time — no long waits</p>
                </div>
              </div>
            </div>
            <div className="appt-page__emergency">
              <strong>🚨 Emergency?</strong>
              <p>Call us immediately at <a href="tel:+918019414878">+91 80194 14878</a> — available 24/7</p>
            </div>
          </div>
          <div className="appt-page__form-wrap">
            <AppointmentForm />
          </div>
        </div>
      </section>
    </main>
  );
}
