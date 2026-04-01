import React from 'react';
import GalleryGrid from '../components/GalleryGrid.jsx';
import heroImg from '../assets/Hospital/Front_Face.png';
import './AboutPage.css';

export default function GalleryPage() {
  return (
    <main style={{ paddingTop: 72 }}>
      <div className="page-banner" style={{ backgroundImage: `url(${heroImg})`, backgroundPosition: 'center top' }}>
        <div className="page-banner__overlay" />
        <div className="container page-banner__content">
          <h1>Hospital Gallery</h1>
          <p>A look at our world-class facilities and caring environment</p>
        </div>
      </div>
      <section className="section-pad">
        <div className="container">
          <span className="section-tag">Our Facility</span>
          <h2 className="section-title" style={{ marginBottom: 40 }}>Inside Vijetha Hospital</h2>
          <GalleryGrid preview={false} />
        </div>
      </section>
    </main>
  );
}
