import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Phone, Menu, X, Calendar } from 'lucide-react';
import logo from '../assets/Hospital_Telugu_Main_logo.webp';
import './Navbar.css';

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About Us' },
  { path: '/specialities', label: 'Specialities' },
  { path: '/doctors', label: 'Our Doctors' },
  { path: '/gallery', label: 'Gallery' },
  { path: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container navbar__inner">
        {/* Logo */}
        <Link to="/" className="navbar__logo">
          <img src={logo} alt="Vijetha Hospital" className="navbar__logo-img" />
          <div className="navbar__logo-text">
            <span className="navbar__logo-name">Vijetha Hospital</span>
            <span className="navbar__logo-tagline">Karimnagar</span>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="navbar__links">
          {navLinks.map(({ path, label }) => (
            <NavLink
              key={path}
              to={path}
              end={path === '/'}
              className={({ isActive }) =>
                `navbar__link ${isActive ? 'navbar__link--active' : ''}`
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>

        {/* CTA */}
        <div className="navbar__actions">
          <a href="tel:+918019414878" className="navbar__phone">
            <Phone size={15} />
            80194 14878
          </a>
          <Link to="/appointment" className="btn-primary navbar__cta">
            <Calendar size={16} />
            Book Appointment
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button className="navbar__hamburger" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile drawer */}
      <div className={`navbar__drawer ${open ? 'open' : ''}`}>
        {navLinks.map(({ path, label }) => (
          <NavLink
            key={path}
            to={path}
            end={path === '/'}
            className={({ isActive }) =>
              `navbar__drawer-link ${isActive ? 'active' : ''}`
            }
            onClick={() => setOpen(false)}
          >
            {label}
          </NavLink>
        ))}
        <Link to="/appointment" className="btn-primary" style={{ marginTop: 16, justifyContent: 'center' }} onClick={() => setOpen(false)}>
          <Calendar size={16} /> Book Appointment
        </Link>
      </div>
    </header>
  );
}
