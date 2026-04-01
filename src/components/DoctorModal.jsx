import React, { useEffect } from 'react';
import { User, X } from 'lucide-react';
import './DoctorModal.css';

export default function DoctorModal({ doctor, onClose }) {
  useEffect(() => {
    const handleEscape = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [onClose]);

  if (!doctor) return null;

  return (
    <div className="doc-modal__overlay" onClick={onClose}>
      <div className="doc-modal__content" onClick={(e) => e.stopPropagation()}>
        <button className="doc-modal__close" onClick={onClose}>
          <X size={24} />
        </button>
        <div className="doc-modal__layout">
          <div className="doc-modal__photo-container">
            {doctor.photo ? (
              <img src={doctor.photo} alt={doctor.name} className="doc-modal__photo" />
            ) : (
              <div className="doc-modal__placeholder">
                <User size={64} />
              </div>
            )}
            {doctor.type === 'Fulltime' && (
              <span className="doc-modal__badge">Fulltime</span>
            )}
          </div>
          <div className="doc-modal__details">
            <span className="doc-modal__specialty">{doctor.specialty}</span>
            <h2 className="doc-modal__name">{doctor.name}</h2>
            <p className="doc-modal__quals">{doctor.qualifications}</p>
            {doctor.designation && (
              <p className="doc-modal__designation">{doctor.designation}</p>
            )}
            <div className="doc-modal__divider"></div>
            <p className="doc-modal__bio">
              We are proud to have {doctor.name} as part of our expert medical team. With extensive experience in {doctor.specialty}, they provide compassionate and highly specialized care to all of our patients.
            </p>
            <div className="doc-modal__action">
              <a href="/appointment" className="btn-primary" onClick={(e) => { e.stopPropagation(); }}>
                Book Appointment
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
