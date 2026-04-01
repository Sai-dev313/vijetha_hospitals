import React, { useState } from 'react';
import { tariffs, tariffCategories, tariffNote } from '../data/tariffs.js';
import { AlertCircle } from 'lucide-react';
import './TariffsSection.css';

export default function TariffsSection() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [isExpanded, setIsExpanded] = useState(false);

  const handleCategoryChange = (c) => {
    setActiveCategory(c);
    setIsExpanded(false);
  };

  const filtered = activeCategory === 'All'
    ? tariffs
    : tariffs.filter((t) => t.category === activeCategory);

  const displayed = isExpanded ? filtered : filtered.slice(0, 5);

  return (
    <section className="tariffs section-pad" style={{ background: 'var(--bg-section)' }}>
      <div className="container">
        <div className="tariffs__header">
          <span className="section-tag">Affordable Care Plans</span>
          <h2 className="section-title">
            Transparent hospital tariffs<br />tailored to every patient.
          </h2>
          <p className="section-subtitle">
            We believe in complete transparency. All charges are listed below as per government-registered rates.
          </p>
        </div>

        {/* Category filter */}
        <div className="tariffs__filters">
          {tariffCategories.map((c) => (
            <button
              key={c}
              className={`tariffs__filter ${activeCategory === c ? 'active' : ''}`}
              onClick={() => handleCategoryChange(c)}
            >
              {c}
            </button>
          ))}
        </div>

        {/* Table */}
        <div className="tariffs__table-wrap">
          <table className="tariffs__table">
            <thead>
              <tr>
                <th>#</th>
                <th>Service / Item</th>
                <th>Category</th>
                <th>Charge</th>
                <th>Note</th>
              </tr>
            </thead>
            <tbody>
              {displayed.map((t, i) => (
                <tr key={i}>
                  <td className="tariffs__num">{i + 1}</td>
                  <td className="tariffs__item">{t.item}</td>
                  <td><span className="tariffs__cat-badge">{t.category}</span></td>
                  <td className="tariffs__charge">{t.charge}</td>
                  <td className="tariffs__note-cell">{t.note || '—'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {filtered.length > 5 && (
          <div style={{ textAlign: 'center', marginTop: 24, marginBottom: 24 }}>
            <button 
              className="btn-secondary" 
              onClick={() => setIsExpanded(!isExpanded)}
            >
              {isExpanded ? 'Show Less' : `View All Prices (${filtered.length})`}
            </button>
          </div>
        )}

        {/* Important note */}
        <div className="tariffs__important">
          <AlertCircle size={20} />
          <strong>{tariffNote}</strong>
        </div>
      </div>
    </section>
  );
}
