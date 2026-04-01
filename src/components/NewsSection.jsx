import React, { useState } from 'react';
import { Newspaper, ExternalLink } from 'lucide-react';
import news1 from '../assets/News_About_Us/IMG-20230225-WA0039-569x1024.jpg';
import news2 from '../assets/News_About_Us/IMG-20230225-WA0040-768x893.jpg';
import news3 from '../assets/News_About_Us/IMG-20230303-WA0016-652x1024.jpg';
import NewsModal from './NewsModal.jsx';
import './NewsSection.css';

const newsItems = [
  {
    img: news1,
    title: 'Vijetha Hospital in the News',
    date: 'February 2023',
    excerpt: 'Vijetha Hospital, Karimnagar receives recognition for its exceptional healthcare services and commitment to the community.',
  },
  {
    img: news2,
    title: 'Hospital Expansion & New Facilities',
    date: 'February 2023',
    excerpt: 'New state-of-the-art equipment and expanded specialties announced to better serve the Karimnagar region.',
  },
  {
    img: news3,
    title: 'Community Health Outreach',
    date: 'March 2023',
    excerpt: 'Vijetha Hospital conducts free health camps and awareness programs across Karimnagar district.',
  },
];

export default function NewsSection() {
  const [selectedNews, setSelectedNews] = useState(null);

  // Duplicate items to ensure a smooth endless scroll
  const marqueeItems = [...newsItems, ...newsItems, ...newsItems, ...newsItems];

  return (
    <section className="news section-pad" style={{ background: 'var(--bg-section)' }}>
      <div className="container">
        <div className="news__header">
          <span className="section-tag">Health Activities & Insights</span>
          <h2 className="section-title">Trusted medical guidance<br />to help you stay informed.</h2>
        </div>
        <div className="news__marquee-wrapper">
          <div className="news__marquee">
            {marqueeItems.map((item, i) => (
              <div className="news__card" key={i} onClick={() => setSelectedNews(item)}>
                <div className="news__card-img-wrap">
                  <img src={item.img} alt={item.title} />
                </div>
                <div className="news__card-body">
                  <div className="news__date">
                    <Newspaper size={13} /> {item.date}
                  </div>
                  <h3 className="news__title">{item.title}</h3>
                  <p className="news__excerpt">{item.excerpt}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {selectedNews && (
        <NewsModal newsItem={selectedNews} onClose={() => setSelectedNews(null)} />
      )}
    </section>
  );
}
