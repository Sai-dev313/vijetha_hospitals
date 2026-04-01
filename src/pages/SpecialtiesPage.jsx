import React from 'react';
import SpecialtiesSection from '../components/SpecialtiesSection.jsx';
import { specialties } from '../data/reviews.js';
import heroImg from '../assets/Hospital/16-768x512.jpg';
import './AboutPage.css';
import './SpecialtiesPage.css';

export default function SpecialtiesPage() {
  return (
    <main style={{ paddingTop: 72 }}>
      <div className="page-banner" style={{ backgroundImage: `url(${heroImg})` }}>
        <div className="page-banner__overlay" />
        <div className="container page-banner__content">
          <h1>Our Specialities</h1>
          <p>Comprehensive care across 12+ medical disciplines</p>
        </div>
      </div>

      <section className="section-pad" style={{ background: 'var(--bg-section)' }}>
        <div className="container">
          <span className="section-tag">Medical Services</span>
          <h2 className="section-title" style={{ marginBottom: 48 }}>All Specialities at Vijetha Hospital</h2>
          <div className="specs-page__grid">
            {specialties.map((s) => (
              <div className="specs-page__card" key={s.id}>
                <div className="specs-page__icon">{s.icon}</div>
                <div className="specs-page__content">
                  <h3>{s.name}</h3>
                  <p>{s.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
