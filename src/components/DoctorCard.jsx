import React from 'react';
import { User } from 'lucide-react';
import './DoctorCard.css';

export default function DoctorCard({ doctor, onClick }) {
  return (
    <div className="doc-card" onClick={onClick} style={{ cursor: onClick ? 'pointer' : 'default' }}>
      <div className="doc-card__photo-wrap">
        {doctor.photo ? (
          <img src={doctor.photo} alt={doctor.name} className="doc-card__photo" />
        ) : (
          <div className="doc-card__photo-placeholder">
            <User size={40} />
          </div>
        )}
        {doctor.type === 'Fulltime' && (
          <span className="doc-card__badge">Fulltime</span>
        )}
      </div>
      <div className="doc-card__body">
        <div className="doc-card__specialty">{doctor.specialty}</div>
        <h3 className="doc-card__name">{doctor.name}</h3>
        <p className="doc-card__quals">{doctor.qualifications}</p>
        {doctor.designation && (
          <p className="doc-card__designation">{doctor.designation}</p>
        )}
      </div>
    </div>
  );
}
