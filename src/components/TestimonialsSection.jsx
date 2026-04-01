import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { reviews, overallRating, totalReviews } from '../data/reviews.js';
import './TestimonialsSection.css';

function StarRating({ rating }) {
  return (
    <div className="stars">
      {[1,2,3,4,5].map((s) => (
        <Star key={s} size={16} fill={s <= rating ? '#e9c95e' : 'none'} color={s <= rating ? '#e9c95e' : '#b2b6cd'} />
      ))}
    </div>
  );
}

export default function TestimonialsSection() {
  const [idx, setIdx] = useState(0);
  const prev = () => setIdx((i) => (i - 1 + reviews.length) % reviews.length);
  const next = () => setIdx((i) => (i + 1) % reviews.length);

  return (
    <section className="testimonials section-pad" style={{ background: 'var(--dark-navy)' }}>
      <div className="container">
        <div className="testimonials__top">
          <div>
            <span className="section-tag" style={{ color: 'var(--peach)' }}>Doctor Reviews</span>
            <h2 className="section-title" style={{ color: '#fff' }}>
              What our patients say.
            </h2>
          </div>
          <div className="testimonials__overall">
            <div className="testimonials__overall-num">{overallRating}★</div>
            <div>
              <StarRating rating={Math.round(overallRating)} />
              <span>{totalReviews} Google Reviews</span>
            </div>
          </div>
        </div>

        {/* Marquee Container */}
        <div className="testimonials__marquee-wrapper">
          <div className="testimonials__marquee">
            {[...reviews, ...reviews].map((r, index) => (
              <div className="testimonials__card" key={`${r.id}-${index}`}>
                <StarRating rating={r.rating} />
                <p className="testimonials__text">"{r.text}"</p>
                <div className="testimonials__author">
                  <div className="testimonials__avatar">
                    {r.author.charAt(0)}
                  </div>
                  <div>
                    <strong>{r.author}</strong>
                    <span>{r.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="testimonials__note">
          <p>* We take all feedback seriously and continuously work to improve our services. For concerns, please contact our Patient Relations team.</p>
        </div>
      </div>
    </section>
  );
}
