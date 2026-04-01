import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Instagram, Facebook, Clock } from 'lucide-react';
import logo from '../assets/Second_logo.png';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__wave" />
      <div className="container footer__inner">
        {/* Brand */}
        <div className="footer__brand">
          <img src={logo} alt="Vijetha Hospital" className="footer__logo" />
          <p className="footer__desc">
            Vijetha Hospital, Karimnagar — A multi-specialty hospital committed to delivering compassionate, high-quality healthcare across all specialties.
          </p>
          <p className="footer__reg">Reg. No. 007/2022</p>
          <div className="footer__socials">
            <a href="https://www.instagram.com/vijethahospitals/" target="_blank" rel="noreferrer" aria-label="Instagram">
              <Instagram size={18} />
            </a>
            <a href="https://www.facebook.com/VijethaHospitalKarimnagar/" target="_blank" rel="noreferrer" aria-label="Facebook">
              <Facebook size={18} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer__col">
          <h4 className="footer__col-title">Quick Links</h4>
          <ul className="footer__list">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/specialities">Specialities</Link></li>
            <li><Link to="/doctors">Our Doctors</Link></li>
            <li><Link to="/gallery">Gallery</Link></li>
            <li><Link to="/appointment">Book Appointment</Link></li>
          </ul>
        </div>

        {/* Specialities */}
        <div className="footer__col">
          <h4 className="footer__col-title">Specialities</h4>
          <ul className="footer__list">
            <li>Emergency & Critical Care</li>
            <li>Cardiology</li>
            <li>Orthopaedics</li>
            <li>Gastroenterology</li>
            <li>Neurology</li>
            <li>Gynaecology</li>
            <li>General Surgery</li>
            <li>Nephrology</li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer__col">
          <h4 className="footer__col-title">Contact Us</h4>
          <ul className="footer__contact-list">
            <li>
              <MapPin size={16} style={{ flexShrink: 0, marginTop: 4 }} />
              <span>Beside HDFC Bank, Karimnagar 505001</span>
            </li>
            <li style={{ alignItems: 'flex-start' }}>
              <Phone size={16} style={{ marginTop: 4 }} />
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <a href="tel:+919866055322">+91 98660 55322</a>
                <a href="tel:+918871080108">+91 88710 80108</a>
                <a href="tel:+919666596108">+91 96665 96108</a>
              </div>
            </li>
            <li>
              <Mail size={16} />
              <a href="mailto:vijethahospitalknr@gmail.com">vijethahospitalknr@gmail.com</a>
            </li>
            <li>
              <Clock size={16} />
              <span>Emergency — Open 24/7</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <p>© {new Date().getFullYear()} Vijetha Hospital, Karimnagar. All rights reserved.</p>
          <p className="footer__bottom-right">Designed with ❤️ for better healthcare</p>
        </div>
      </div>
    </footer>
  );
}
