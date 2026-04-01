import React from 'react';
import HeroSection from '../components/HeroSection.jsx';
import AboutSection from '../components/AboutSection.jsx';
import SpecialtiesSection from '../components/SpecialtiesSection.jsx';
import DoctorsSection from '../components/DoctorsSection.jsx';
import TestimonialsSection from '../components/TestimonialsSection.jsx';
import TariffsSection from '../components/TariffsSection.jsx';
import GalleryGrid from '../components/GalleryGrid.jsx';
import NewsSection from '../components/NewsSection.jsx';
import ContactSection from '../components/ContactSection.jsx';
import AppointmentForm from '../components/AppointmentForm.jsx';
import './HomePage.css';

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <SpecialtiesSection />

      {/* Appointment callout section */}
      <section className="home-appt section-pad">
        <div className="container home-appt__inner">
          <div className="home-appt__text">
            <span className="section-tag" style={{ color: 'var(--peach)' }}>Doctor Appointment</span>
            <h2 className="section-title" style={{ color: '#fff' }}>
              Book your visit with our<br />specialist in just a few clicks.
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.75)', lineHeight: 1.75, maxWidth: 420 }}>
              Choose your doctor, pick a date, and we'll confirm your appointment within 30 minutes. Quality healthcare starts with one call.
            </p>
          </div>
          <div className="home-appt__form">
            <AppointmentForm compact />
          </div>
        </div>
      </section>

      <TariffsSection />
      <DoctorsSection preview />
      <TestimonialsSection />

      {/* Gallery preview */}
      <section className="section-pad">
        <div className="container">
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: 40, flexWrap: 'wrap', gap: 16 }}>
            <div>
              <span className="section-tag">Our Gallery</span>
              <h2 className="section-title">A glimpse inside<br />Vijetha Hospital.</h2>
            </div>
            <a href="/gallery" className="btn-secondary">View All Photos</a>
          </div>
          <GalleryGrid preview />
        </div>
      </section>

      <NewsSection />
      <ContactSection />
    </main>
  );
}
