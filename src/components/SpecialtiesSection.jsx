import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { specialties } from '../data/reviews.js';
import './SpecialtiesSection.css';

export default function SpecialtiesSection() {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -344, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 344, behavior: 'smooth' });
    }
  };

  return (
    <section className="specs section-pad" style={{ background: 'var(--bg-section)' }}>
      <div className="container">
        <div className="specs__header">
          <div>
            <span className="section-tag">Our Medical Services</span>
            <h2 className="section-title">
              Comprehensive treatments<br />designed for your well-being.
            </h2>
          </div>
          <Link to="/specialities" className="btn-secondary">
            View All <ArrowRight size={16} />
          </Link>
        </div>

        <div className="specs__carousel-container">
          <button className="specs__arrow specs__arrow--left" onClick={scrollLeft} aria-label="Scroll left">
            <ChevronLeft size={24} />
          </button>

          <div className="specs__carousel" ref={scrollRef}>
            {specialties.map((s) => (
              <div className="specs__card" key={s.id}>
                <div className="specs__img-wrap">
                  <img src={s.image} alt={s.name} className="specs__img" />
                </div>
                <h3 className="specs__name">{s.name}</h3>
                <p className="specs__desc">{s.description}</p>
                <Link to="/specialities" className="specs__link">
                  Learn more <ArrowRight size={14} />
                </Link>
              </div>
            ))}
          </div>

          <button className="specs__arrow specs__arrow--right" onClick={scrollRight} aria-label="Scroll right">
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
}
