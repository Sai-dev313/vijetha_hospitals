import React, { useEffect } from 'react';
import { X, Newspaper } from 'lucide-react';
import './NewsModal.css';

export default function NewsModal({ newsItem, onClose }) {
  useEffect(() => {
    const handleEscape = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [onClose]);

  if (!newsItem) return null;

  return (
    <div className="news-modal__overlay" onClick={onClose}>
      <div className="news-modal__content" onClick={(e) => e.stopPropagation()}>
        <button className="news-modal__close" onClick={onClose}>
          <X size={24} />
        </button>
        <div className="news-modal__img-wrap">
          <img src={newsItem.img} alt={newsItem.title} className="news-modal__img" />
        </div>
        <div className="news-modal__body">
          <div className="news-modal__date">
            <Newspaper size={14} /> {newsItem.date}
          </div>
          <h2 className="news-modal__title">{newsItem.title}</h2>
          <p className="news-modal__text">{newsItem.excerpt}</p>
        </div>
      </div>
    </div>
  );
}
