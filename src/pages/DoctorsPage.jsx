import React from 'react';
import DoctorsSection from '../components/DoctorsSection.jsx';
import heroImg from '../assets/Hospital/8-768x512.jpg';
import './AboutPage.css';

export default function DoctorsPage() {
  return (
    <main style={{ paddingTop: 72 }}>
      <div className="page-banner" style={{ backgroundImage: `url(${heroImg})` }}>
        <div className="page-banner__overlay" />
        <div className="container page-banner__content">
          <h1>Our Doctors</h1>
          <p>24+ experienced specialists across all major disciplines</p>
        </div>
      </div>
      <DoctorsSection preview={false} />
    </main>
  );
}
