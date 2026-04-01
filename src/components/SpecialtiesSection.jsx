import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { specialties } from '../data/reviews.js';
import './SpecialtiesSection.css';

export default function SpecialtiesSection() {
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

        <div className="specs__grid">
          {specialties.slice(0, 9).map((s) => (
            <div className="specs__card" key={s.id}>
              <div className="specs__icon">{s.icon}</div>
              <h3 className="specs__name">{s.name}</h3>
              <p className="specs__desc">{s.description}</p>
              <Link to="/specialities" className="specs__link">
                Learn more <ArrowRight size={14} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
