import React from 'react';
import img1 from '../assets/Hospital/1-768x512.jpg';
import img2 from '../assets/Hospital/WhatsApp-Image-2024-09-29-at-1.29.05-AM-scaled.jpeg';
import './AboutPage.css';

const team = [
  'State-of-the-art operation theaters',
  'Advanced ICU with 24/7 monitoring',
  'Digital X-Ray and 2D ECHO diagnostics',
  'Fully equipped emergency and trauma center',
  'Laparoscopic surgical facilities',
  'Dedicated patient-friendly rooms (General, Special, AC)',
];

export default function AboutPage() {
  return (
    <main style={{ paddingTop: 72 }}>
      {/* Banner */}
      <div className="page-banner" style={{ backgroundImage: `url(${img2})` }}>
        <div className="page-banner__overlay" />
        <div className="container page-banner__content">
          <h1>About Us</h1>
          <p>Multi-specialty healthcare committed to you</p>
        </div>
      </div>

      <section className="section-pad">
        <div className="container about-pg__inner">
          <div>
            <span className="section-tag">Who We Are</span>
            <h2 className="section-title">Vijetha Hospital, Karimnagar</h2>
            <p className="section-subtitle" style={{ marginBottom: 24 }}>
              Government Registered — Reg. No. 007/2022
            </p>
            <p style={{ color: 'var(--text-muted)', lineHeight: 1.8, marginBottom: 16 }}>
              Vijetha Hospital is a leading multi-specialty hospital based in Karimnagar, Telangana. Established with a vision to provide compassionate, accessible, and high-quality medical care to every patient, we have grown to become one of the most trusted names in healthcare in the region.
            </p>
            <p style={{ color: 'var(--text-muted)', lineHeight: 1.8, marginBottom: 16 }}>
              Our hospital brings together over 20 experienced specialists from 12+ medical disciplines, backed by the latest clinical technology. From routine check-ups to complex multi-organ surgeries and critical care, Vijetha Hospital is equipped to handle it all.
            </p>
            <p style={{ color: 'var(--text-muted)', lineHeight: 1.8 }}>
              We believe that great healthcare goes beyond medicine — it's about compassion, communication, and continuity of care. Every team member at Vijetha Hospital is dedicated to making your experience as smooth and healing as possible.
            </p>
          </div>
          <img src={img1} alt="Vijetha Hospital" className="about-pg__img" />
        </div>
      </section>

      {/* Facilities */}
      <section className="section-pad" style={{ background: 'var(--bg-section)' }}>
        <div className="container">
          <span className="section-tag">Our Facilities</span>
          <h2 className="section-title">World-class facilities for your care</h2>
          <div className="about-pg__facilities">
            {team.map((f, i) => (
              <div className="about-pg__facility" key={i}>
                <div className="about-pg__facility-check">✓</div>
                <span>{f}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-pad">
        <div className="container about-pg__mv">
          <div className="about-pg__mv-card" style={{ borderTop: '4px solid var(--orange)' }}>
            <h3>🎯 Our Mission</h3>
            <p>To provide comprehensive, compassionate, and quality healthcare accessible to all — combining medical expertise with cutting-edge technology in a patient-friendly environment.</p>
          </div>
          <div className="about-pg__mv-card" style={{ borderTop: '4px solid var(--navy)' }}>
            <h3>🌟 Our Vision</h3>
            <p>To be the most trusted multi-specialty hospital in Telangana, setting the standard for clinical excellence, patient safety, and community health impact.</p>
          </div>
          <div className="about-pg__mv-card" style={{ borderTop: '4px solid var(--gold)' }}>
            <h3>💛 Our Values</h3>
            <p>Compassion. Integrity. Excellence. Innovation. Teamwork. Every decision we make is guided by our commitment to putting patients first.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
