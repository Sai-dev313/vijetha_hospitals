import React from 'react';
import AppointmentForm from '../components/AppointmentForm.jsx';
import heroImg from '../assets/Hospital/17-768x512.jpg';
import { Phone, MessageCircle, Clock, ShieldCheck } from 'lucide-react';
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
            <h2 className="section-title">Professional Care<br />Just a Click Away.</h2>
            <p style={{ color: 'var(--text-muted)', lineHeight: 1.8, marginBottom: 28 }}>
              Select your preferred doctor and date. Our team will call you back within 30 minutes to confirm your Slot & Token Number in our Digital Appointment Log.
            </p>

            <div className="appt-page__quick-contact">
              <h4>Regular Patient?</h4>
              <p>For fastest booking, call or message us directly:</p>
              <div className="appt-page__btns">
                <a href="tel:+919866055322" className="btn-primary appt-page__btn">
                  <Phone size={18} />
                  Call Reception
                </a>
                <a href="https://wa.me/919866055322" target="_blank" rel="noopener noreferrer" className="btn-secondary appt-page__btn">
                  <MessageCircle size={18} />
                  WhatsApp Us
                </a>
              </div>
            </div>

            <div className="appt-page__steps">
              <div className="appt-page__step">
                <div className="appt-page__step-num"><ShieldCheck size={16} /></div>
                <div>
                  <strong>Digital Logging</strong>
                  <p>Your request goes directly to our Google Sheet Log</p>
                </div>
              </div>
              <div className="appt-page__step">
                <div className="appt-page__step-num"><Phone size={16} /></div>
                <div>
                  <strong>Staff Callback</strong>
                  <p>Our receptionist calls you to assign a Token Number</p>
                </div>
              </div>
              <div className="appt-page__step">
                <div className="appt-page__step-num"><Clock size={16} /></div>
                <div>
                  <strong>Walk-in Service</strong>
                  <p>Visit at your assigned time for zero waiting</p>
                </div>
              </div>
            </div>
            
            <div className="appt-page__emergency">
              <strong>🚨 Emergency?</strong>
              <p>Call us immediately at <a href="tel:+919866055322">+91 98660 55322</a> — available 24/7</p>
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
