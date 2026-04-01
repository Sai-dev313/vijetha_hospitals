import React, { useState } from 'react';
import { Search, Filter } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import DoctorCard from './DoctorCard.jsx';
import { doctors, specialties } from '../data/doctors.js';
import './DoctorsSection.css';

export default function DoctorsSection({ preview = false }) {
  const [search, setSearch] = useState('');
  const [activeSpec, setActiveSpec] = useState('All');

  const filtered = doctors.filter((d) => {
    const matchSpec = activeSpec === 'All' || d.specialty === activeSpec;
    const matchSearch =
      d.name.toLowerCase().includes(search.toLowerCase()) ||
      d.specialty.toLowerCase().includes(search.toLowerCase()) ||
      d.qualifications.toLowerCase().includes(search.toLowerCase());
    return matchSpec && matchSearch;
  });

  const displayed = preview ? filtered.slice(0, 8) : filtered;

  return (
    <section className="doctors-sec section-pad">
      <div className="container">
        {/* Header */}
        <div className="doctors-sec__header">
          <div>
            <span className="section-tag">Doctor Appointment</span>
            <h2 className="section-title">
              Experienced specialists<br />committed to your health.
            </h2>
          </div>
          {preview && (
            <Link to="/doctors" className="btn-secondary">
              All Doctors <ArrowRight size={16} />
            </Link>
          )}
        </div>

        {/* Search + Filter */}
        <div className="doctors-sec__controls">
          <div className="doctors-sec__search">
            <Search size={18} />
            <input
              type="text"
              placeholder="Search by name, specialty, or qualification…"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <div className="doctors-sec__filters">
            {specialties.slice(0, preview ? 8 : specialties.length).map((s) => (
              <button
                key={s}
                className={`doctors-sec__filter ${activeSpec === s ? 'active' : ''}`}
                onClick={() => setActiveSpec(s)}
              >
                {s}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        {displayed.length > 0 ? (
          <div className="doctors-sec__grid">
            {displayed.map((d) => (
              <DoctorCard key={d.id} doctor={d} />
            ))}
          </div>
        ) : (
          <div className="doctors-sec__empty">
            <Filter size={40} />
            <p>No doctors found for your search. Try a different keyword or specialty.</p>
          </div>
        )}

        {preview && filtered.length > 8 && (
          <div style={{ textAlign: 'center', marginTop: 40 }}>
            <Link to="/doctors" className="btn-primary">
              View All {filtered.length} Doctors <ArrowRight size={16} />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
