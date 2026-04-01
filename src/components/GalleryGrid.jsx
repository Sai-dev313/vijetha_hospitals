import React, { useState } from 'react';
import { X, ZoomIn } from 'lucide-react';
import './GalleryGrid.css';

// Import all hospital images
import img1 from '../assets/Hospital/1-768x512.jpg';
import img2 from '../assets/Hospital/6-768x512.jpg';
import img3 from '../assets/Hospital/8-768x512.jpg';
import img4 from '../assets/Hospital/10-768x512.jpg';
import img5 from '../assets/Hospital/12-768x512.jpg';
import img6 from '../assets/Hospital/13-768x512.jpg';
import img7 from '../assets/Hospital/14-768x512.jpg';
import img8 from '../assets/Hospital/16-768x512.jpg';
import img9 from '../assets/Hospital/17-768x512.jpg';
import img10 from '../assets/Hospital/18-768x512.jpg';
import img11 from '../assets/Hospital/21-768x512.jpg';
import img12 from '../assets/Hospital/22-768x512.jpg';
import img13 from '../assets/Hospital/20221130_113432-768x576.jpg';
import img14 from '../assets/Hospital/20221130_113506-1-768x576.jpg';

const galleryImages = [
  { src: img1, alt: 'Hospital interior' },
  { src: img2, alt: 'Hospital ward' },
  { src: img3, alt: 'ICU facilities' },
  { src: img4, alt: 'Consultation room' },
  { src: img5, alt: 'Operation theater' },
  { src: img6, alt: 'Patient room' },
  { src: img7, alt: 'Reception area' },
  { src: img8, alt: 'Medical equipment' },
  { src: img9, alt: 'Waiting area' },
  { src: img10, alt: 'Emergency department' },
  { src: img11, alt: 'Hospital corridor' },
  { src: img12, alt: 'Pharmacy' },
  { src: img13, alt: 'Hospital facility' },
  { src: img14, alt: 'Hospital wing' },
];

export default function GalleryGrid({ preview = false }) {
  const [lightbox, setLightbox] = useState(null);
  const images = preview ? galleryImages.slice(0, 9) : galleryImages;

  return (
    <>
      <div className="gallery-grid">
        {images.map((img, i) => (
          <div className="gallery-grid__item" key={i} onClick={() => setLightbox(i)}>
            <img src={img.src} alt={img.alt} loading="lazy" />
            <div className="gallery-grid__overlay">
              <ZoomIn size={28} />
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div className="gallery-lightbox" onClick={() => setLightbox(null)}>
          <button className="gallery-lightbox__close" onClick={() => setLightbox(null)}>
            <X size={24} />
          </button>
          <img
            src={images[lightbox].src}
            alt={images[lightbox].alt}
            onClick={(e) => e.stopPropagation()}
          />
          <div className="gallery-lightbox__caption">{images[lightbox].alt}</div>
        </div>
      )}
    </>
  );
}
