import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react';
import './ContactSection.css';

export default function ContactSection() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setForm({ name: '', email: '', phone: '', message: '' });
  };

  const contactInfo = [
    { icon: <MapPin size={20} />, label: 'Address', value: 'Vijetha Hospital, Karimnagar, Telangana' },
    { icon: <Phone size={20} />, label: 'Emergency', value: '+91 80194 14878', href: 'tel:+918019414878' },
    { icon: <Mail size={20} />, label: 'Email', value: 'info@vijethahospitalknr.com', href: 'mailto:info@vijethahospitalknr.com' },
    { icon: <Clock size={20} />, label: 'Emergency Services', value: 'Open 24 Hours, 7 Days' },
  ];

  return (
    <section className="contact section-pad">
      <div className="container contact__inner">
        {/* Left: info */}
        <div className="contact__info">
          <span className="section-tag">Get In Touch</span>
          <h2 className="section-title">
            We're here to answer<br />your questions.
          </h2>
          <p className="section-subtitle" style={{ marginBottom: 36 }}>
            Whether you need to book an appointment, have a medical query, or need emergency assistance — our team is available around the clock.
          </p>

          <div className="contact__cards">
            {contactInfo.map((c, i) => (
              <div className="contact__card" key={i}>
                <div className="contact__card-icon">{c.icon}</div>
                <div>
                  <span className="contact__card-label">{c.label}</span>
                  {c.href ? (
                    <a href={c.href} className="contact__card-value">{c.value}</a>
                  ) : (
                    <p className="contact__card-value">{c.value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Map embed */}
          <div className="contact__map">
            <iframe
              title="Vijetha Hospital Location"
              src="https://maps.google.com/maps?q=Karimnagar,+Telangana,+India&t=&z=13&ie=UTF8&iwloc=&output=embed"
              loading="lazy"
              allowFullScreen
            />
          </div>
        </div>

        {/* Right: form */}
        <div className="contact__form-wrap">
          <h3 className="contact__form-title">Send us a Message</h3>
          {sent ? (
            <div className="contact__success">
              <CheckCircle size={40} />
              <p>Message sent! We'll get back to you soon.</p>
            </div>
          ) : (
            <form className="contact__form" onSubmit={handleSubmit}>
              <div className="contact__form-field">
                <label>Full Name *</label>
                <input name="name" value={form.name} onChange={handleChange} placeholder="Your name" required />
              </div>
              <div className="contact__form-field">
                <label>Email Address</label>
                <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="you@email.com" />
              </div>
              <div className="contact__form-field">
                <label>Phone Number *</label>
                <input name="phone" value={form.phone} onChange={handleChange} placeholder="+91 XXXXX XXXXX" required />
              </div>
              <div className="contact__form-field">
                <label>Message *</label>
                <textarea name="message" value={form.message} onChange={handleChange} rows={5} placeholder="How can we help you?" required />
              </div>
              <button type="submit" className="btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                <Send size={16} /> Send Message
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
