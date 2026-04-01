import React, { useEffect, useState } from 'react';
import { Globe, X, ChevronUp } from 'lucide-react';
import './LanguageSwitcher.css';

export default function LanguageSwitcher() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // Only inject if it doesn't already exist
    if (!document.getElementById('google-translate-script')) {
      const addScript = document.createElement('script');
      addScript.id = 'google-translate-script';
      addScript.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
      addScript.async = true;
      document.body.appendChild(addScript);

      window.googleTranslateElementInit = () => {
        new window.google.translate.TranslateElement(
          { pageLanguage: 'en', includedLanguages: 'en,hi,te', autoDisplay: false },
          'google_translate_element'
        );
      };
    }
  }, []);

  const triggerTranslate = (langCode) => {
    const select = document.querySelector('.goog-te-combo');
    if (select) {
      select.value = langCode;
      select.dispatchEvent(new Event('change'));
    }
    setOpen(false);
  };

  return (
    <>
      {/* Hidden wrapper for Google Translate to mount */}
      <div id="google_translate_element" style={{ display: 'none' }}></div>
      
      <div className="lang-switcher">
        {open && (
          <div className="lang-switcher__menu">
            <div className="lang-switcher__menu-header">
              <span>Select Language</span>
              <button onClick={() => setOpen(false)}><X size={16} /></button>
            </div>
            <button onClick={() => triggerTranslate('en')}>English</button>
            <button onClick={() => triggerTranslate('te')}>Telugu (తెలుగు)</button>
            <button onClick={() => triggerTranslate('hi')}>Hindi (हिन्दी)</button>
          </div>
        )}
        <button className="lang-switcher__fab" onClick={() => setOpen(!open)}>
          <Globe size={20} />
          <span className="lang-switcher__fab-text">Translate</span>
          <ChevronUp size={16} style={{ transform: open ? 'rotate(180deg)' : 'none', transition: 'transform 0.3s' }} />
        </button>
      </div>
    </>
  );
}
