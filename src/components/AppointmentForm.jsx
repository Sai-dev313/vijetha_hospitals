import React, { useState } from 'react';
import { Calendar, User, Phone, MessageSquare, CheckCircle, ChevronDown } from 'lucide-react';
import { doctors } from '../data/doctors.js';
import './AppointmentForm.css';

export default function AppointmentForm({ compact = false }) {
  const [form, setForm] = useState({ name: '', phone: '', date: '', doctor: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle, loading, success, error

  const GOOGLE_SHEET_URL = 'https://script.google.com/macros/s/AKfycbz4VGIMnUgHnOWqmUcF8VadTwfBDxPfG0zvXa4De0anUtl_XeEbf4b0RZRD3l7_uk4ehQ/exec';

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    try {
      // Using no-cors if needed, but since it's a simple POST, we'll try standard first
      // Apps Script sometimes requires a redirect, so we use 'mode: no-cors' or a specific header
      await fetch(GOOGLE_SHEET_URL, {
        method: 'POST',
        mode: 'no-cors', // Important for Google Apps Script redirects
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      setStatus('success');
      setForm({ name: '', phone: '', date: '', doctor: '', message: '' });
      setTimeout(() => setStatus('idle'), 10000);
    } catch (error) {
      console.error('Submission failed:', error);
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="appt__success">
        <CheckCircle size={48} className="success-icon" />
        <h3>Request Received!</h3>
        <p>Your details are now in our <strong>Hospital Appointment Log</strong>.</p>
        <p>Our receptionist will call you within 30 minutes to confirm your Slot & Token Number.</p>
        <div className="appt__success-actions">
          <button onClick={() => setStatus('idle')} className="btn-secondary">Submit Another</button>
          <a href="tel:+919866055322" className="btn-primary"><Phone size={16} /> Call Now</a>
        </div>
      </div>
    );
  }

  return (
    <form className={`appt-form ${compact ? 'appt-form--compact' : ''}`} onSubmit={handleSubmit}>
      <div className="appt-form__row">
        <div className="appt-form__field">
          <label><User size={15} /> Full Name *</label>
          <input name="name" value={form.name} onChange={handleChange} placeholder="Your full name" required />
        </div>
        <div className="appt-form__field">
          <label><Phone size={15} /> Phone Number *</label>
          <input name="phone" value={form.phone} onChange={handleChange} placeholder="+91 XXXXX XXXXX" required />
        </div>
      </div>
      <div className="appt-form__row">
        <div className="appt-form__field">
          <label><Calendar size={15} /> Preferred Date *</label>
          <input name="date" type="date" value={form.date} onChange={handleChange} required min={new Date().toISOString().split('T')[0]} />
        </div>
        <div className="appt-form__field">
          <label><ChevronDown size={15} /> Select Doctor *</label>
          <div className="appt-form__select-wrap">
            <select name="doctor" value={form.doctor} onChange={handleChange} required>
              <option value="">-- Choose a Specialist --</option>
              {doctors.map((d) => (
                <option key={d.id} value={d.name}>
                  {d.name} — {d.specialty}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
      <div className="appt-form__field">
        <label><MessageSquare size={15} /> Message / Symptoms (optional)</label>
        <textarea name="message" value={form.message} onChange={handleChange} placeholder="Briefly describe your symptoms or reason for visit…" rows={3} />
      </div>
      <div className="appt-form__submit-row">
        <button 
          type="submit" 
          className={`btn-primary appt-form__submit ${status === 'loading' ? 'loading' : ''}`}
          disabled={status === 'loading'}
        >
          {status === 'loading' ? (
            'Processing...'
          ) : (
            <>
              <Calendar size={18} />
              Book via Web
            </>
          )}
        </button>
        
        <div className="appt-form__divider">
          <span>OR</span>
        </div>

        <a href="tel:+919866055322" className="btn-outline appt-form__call">
          <Phone size={18} />
          Call Reception Directly
        </a>
      </div>
      
      {status === 'error' && (
        <p className="appt-form__error">Oops! Something went wrong. Please call us directly.</p>
      )}
      <p className="appt-form__note">🔒 Your information is sent securely to our hospital log.</p>
    </form>
  );
}
