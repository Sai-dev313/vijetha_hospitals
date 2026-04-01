import React from 'react';
import { Instagram, Facebook } from 'lucide-react';
import './FloatingSocials.css';

const WhatsAppIcon = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12.012 2c-5.506 0-9.988 4.478-9.988 9.984 0 1.748.456 3.45 1.321 4.952L2 22l5.166-1.344c1.472.825 3.161 1.258 4.846 1.258 5.508 0 9.988-4.478 9.988-9.985S17.519 2 12.012 2zm0 18.006c-1.505 0-2.98-.387-4.288-1.121l-.307-.179-3.187.831.847-3.082-.2-.315c-.808-1.282-1.233-2.76-1.233-4.28 0-4.437 3.608-8.048 8.049-8.048 4.444 0 8.052 3.612 8.052 8.05 0 4.434-3.608 8.044-8.052 8.044zm4.417-6.059c-.244-.122-1.442-.713-1.666-.795-.224-.081-.387-.122-.55.122-.163.245-.63 .795-.773.957-.143.163-.286.183-.53.061-.244-.122-1.03-.38-1.959-1.206-.723-.642-1.21-1.436-1.353-1.68-.143-.245-.015-.378.107-.5.11-.11.244-.286.367-.429.122-.143.163-.245.244-.408.081-.163.04-.306-.02-.429-.06-.122-.55-1.326-.753-1.815-.198-.475-.399-.411-.55-.418-.143-.007-.306-.007-.468-.007s-.427.061-.652.306c-.224.245-.855.836-.855 2.039s.876 2.365.998 2.528c.122.163 1.722 2.628 4.17 3.684.583.251 1.038.401 1.393.514.585.185 1.118.158 1.538.096.467-.069 1.442-.589 1.646-1.157.204-.569.204-1.056.143-1.157-.061-.1-.224-.161-.468-.282z" />
  </svg>
);

export default function FloatingSocials() {
  return (
    <div className="floating-socials">
      <a 
        href="https://wa.me/919666596108" 
        target="_blank" 
        rel="noreferrer" 
        className="floating-socials__btn floating-socials__btn--whatsapp"
        aria-label="Chat on WhatsApp"
      >
        <WhatsAppIcon />
      </a>
      <a 
        href="https://www.instagram.com/vijethahospitals/" 
        target="_blank" 
        rel="noreferrer" 
        className="floating-socials__btn floating-socials__btn--instagram"
        aria-label="Follow on Instagram"
      >
        <Instagram size={24} />
      </a>
      <a 
        href="https://www.facebook.com/VijethaHospitalKarimnagar/" 
        target="_blank" 
        rel="noreferrer" 
        className="floating-socials__btn floating-socials__btn--facebook"
        aria-label="Follow on Facebook"
      >
        <Facebook size={24} />
      </a>
    </div>
  );
}
