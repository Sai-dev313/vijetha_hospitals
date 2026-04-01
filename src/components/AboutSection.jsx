import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Award, Users, Clock } from 'lucide-react';
import about1 from '../assets/Hospital/1-768x512.jpg';
import about2 from '../assets/Hospital/20221130_113506-1-768x576.jpg';
import './AboutSection.css';

const highlights = [
  { icon: <Award size={20} />, label: 'Reg. No. 007/2022', sub: 'Government Registered' },
  { icon: <Users size={20} />, label: '20+ Specialists', sub: 'Expert Doctors' },
  { icon: <Clock size={20} />, label: '24/7 Emergency', sub: 'Always Available' },
];

export default function AboutSection() {
  return (
    <section className="about section-pad">
      <div className="container about__inner">
        {/* Images */}
        <div className="about__images">
          <div className="about__img-main-wrap">
            <img src={about1} alt="Vijetha Hospital interior" className="about__img-main" />
          </div>
          <div className="about__img-secondary-wrap">
            <img src={about2} alt="Hospital team" className="about__img-secondary" />
            <div className="about__img-badge">
              <span className="about__badge-num">4.5★</span>
              <span>Google Reviews<br /><strong>96 Reviews</strong></span>
            </div>
          </div>
        </div>

        {/* Text */}
        <div className="about__content">
          <span className="section-tag">About Us</span>
          <h2 className="section-title">
            Dedicated to delivering<br />compassionate, high-quality<br />healthcare.
          </h2>
          <p className="about__text">
            Vijetha Hospital is a premier multi-specialty hospital in Karimnagar, Telangana. We combine the latest medical technology with compassionate care to provide every patient with an exceptional healthcare experience.
          </p>
          <p className="about__text">
            Our team of over 20 experienced specialists across 12+ medical departments ensures that you receive expert care for all health needs — from routine consultations to complex surgeries and critical care.
          </p>

          <div className="about__highlights">
            {highlights.map((h, i) => (
              <div className="about__highlight" key={i}>
                <div className="about__highlight-icon">{h.icon}</div>
                <div>
                  <strong>{h.label}</strong>
                  <span>{h.sub}</span>
                </div>
              </div>
            ))}
          </div>

          <Link to="/about" className="btn-primary" style={{ marginTop: 8 }}>
            Read More <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
