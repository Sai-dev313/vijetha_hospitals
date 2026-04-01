import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Phone, ChevronDown } from 'lucide-react';
import heroImg from '../assets/Hospital/WhatsApp-Image-2024-09-29-at-1.29.05-AM-scaled.jpeg';
import frontFace from '../assets/Hospital/Front_Face.jpg';
import './HeroSection.css';

export default function HeroSection() {
  return (
    <section className="hero">
      {/* Background */}
      <div className="hero__bg" style={{ backgroundImage: `url(${heroImg})` }} />
      <div className="hero__overlay" />

      <div className="container hero__inner">
        {/* Text */}
        <div className="hero__content fade-up">
          <div className="hero__badge">🏥 Karimnagar's Trusted Multi-Specialty Hospital</div>
          <h1 className="hero__title">
            Your Health.<br />
            <span className="hero__title-accent">Our Commitment.</span>
          </h1>
          <p className="hero__subtitle">
            Expert specialists. State-of-the-art facilities. Compassionate care — available 24/7 for you and your family.
          </p>
          <div className="hero__actions">
            <Link to="/appointment" className="btn-primary hero__cta-primary">
              <Calendar size={18} />
              Book Appointment
            </Link>
            <a href="tel:+919866055322" className="btn-outline-light">
              <Phone size={18} />
              98660 55322
            </a>
          </div>
          <div className="hero__stats">
            <div className="hero__stat">
              <span className="hero__stat-num">24/7</span>
              <span className="hero__stat-label">Emergency Care</span>
            </div>
            <div className="hero__stat-divider" />
            <div className="hero__stat">
              <span className="hero__stat-num">20+</span>
              <span className="hero__stat-label">Specialist Doctors</span>
            </div>
            <div className="hero__stat-divider" />
            <div className="hero__stat">
              <span className="hero__stat-num">4.5★</span>
              <span className="hero__stat-label">Google Rating</span>
            </div>
          </div>
        </div>

        {/* Image card */}
        <div className="hero__image-wrap fade-up" style={{ animationDelay: '0.2s' }}>
          <img src={frontFace} alt="Vijetha Hospital" className="hero__image" />
          <div className="hero__image-badge">
            <span className="hero__image-badge-icon">✅</span>
            <div>
              <strong>Open 24/7</strong>
              <small>Emergency Services</small>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hero__scroll">
        <ChevronDown size={24} />
      </div>
    </section>
  );
}
