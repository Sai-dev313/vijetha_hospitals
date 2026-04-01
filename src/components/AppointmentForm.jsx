import React, { useState } from 'react';
import { Calendar, User, Phone, MessageSquare, CheckCircle, ChevronDown } from 'lucide-react';
import { doctors } from '../data/doctors.js';
import './AppointmentForm.css';

export default function AppointmentForm({ compact = false }) {
  const [form, setForm] = useState({ name: '', phone: '', date: '', doctor: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
    setForm({ name: '', phone: '', date: '', doctor: '', message: '' });
  };

  if (submitted) {
    return (
      <div className="appt__success">
        <CheckCircle size={48} />
        <h3>Appointment Request Sent!</h3>
        <p>We'll call you back within 30 minutes to confirm your appointment.</p>
        <p style={{ marginTop: 6 }}>For emergencies call: <a href="tel:+919866055322">98660 55322</a></p>
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
      <button type="submit" className="btn-primary appt-form__submit">
        <Calendar size={18} />
        Book Appointment
      </button>
      <p className="appt-form__note">🔒 Your information is secure. We'll confirm via call within 30 minutes.</p>
    </form>
  );
}
