import React from 'react';
import ContactSection from '../components/ContactSection.jsx';
import heroImg from '../assets/Hospital/14-768x512.jpg';
import './AboutPage.css';

export default function ContactPage() {
  return (
    <main style={{ paddingTop: 72 }}>
      <div className="page-banner" style={{ backgroundImage: `url(${heroImg})` }}>
        <div className="page-banner__overlay" />
        <div className="container page-banner__content">
          <h1>Contact Us</h1>
          <p>We're here to help — reach out any time</p>
        </div>
      </div>
      <ContactSection />
    </main>
  );
}
