// ============================================================
// VIJETHA HOSPITAL — Reviews & Specialties Data
// ============================================================

// ---- Image imports (Vite bundles these correctly for Netlify) ----
import emergencyImg from '../assets/Services/emergency-critical-care.avif';
import cardiologyImg from '../assets/Services/cardiology.jpg';
import orthopaedicsImg from '../assets/Services/orthopaedics.png';
import gastroImg from '../assets/Services/gastroenterology.jpg';
import neurologyImg from '../assets/Services/neurology.avif';
import gynaeImg from '../assets/Services/gynaecology.jpg';
import nephrologyImg from '../assets/Services/nephrology.jpg';
import urologyImg from '../assets/Services/urology.jpg';
import generalSurgImg from '../assets/Services/general-surgery.jpg';
import paediatricsImg from '../assets/Services/paediatrics.jpg';
import entImg from '../assets/Services/ent.png';
import anaesthImg from '../assets/Services/anaesthesiology.avif';

export const reviews = [
  {
    id: 1,
    author: "Srija Bommagalla",
    rating: 5,
    text: "Excellent treatment for all diagnoses. I'm very satisfied with the care and attention I received from all the doctors and staff.",
    date: "March 2024",
  },
  {
    id: 2,
    author: "Sai Krishna Reddy L",
    rating: 5,
    text: "Exceptional care every time. Skilled, compassionate, and precise treatment. Highly recommend Vijetha Hospital.",
    date: "February 2024",
  },
  {
    id: 3,
    author: "35FRAMES Photography",
    rating: 4,
    text: "Very excellent hospital, caring is very nice. The staff are attentive and always ready to help.",
    date: "January 2024",
  },
  {
    id: 4,
    author: "Madhuker Palle",
    rating: 5,
    text: "Professional and caring staff. Well-maintained facilities with great ambiance. The overall experience was outstanding.",
    date: "December 2023",
  },
  {
    id: 5,
    author: "Amitha Reddy",
    rating: 5,
    text: "Doctors are patient, polite, and the staff is very friendly. I felt well taken care of throughout my stay.",
    date: "November 2023",
  },
  {
    id: 6,
    author: "Pramod Varma",
    rating: 4,
    text: "Hospital is patient-friendly with good hospitality and experienced doctors. Highly recommended for all healthcare needs.",
    date: "October 2023",
  },
];

export const overallRating = 4.5;
export const totalReviews = 96;

export const specialties = [
  {
    id: 1,
    name: "Emergency & Critical Care",
    image: emergencyImg,
    description: "24/7 emergency services with state-of-the-art ICU and critical care facilities.",
  },
  {
    id: 2,
    name: "Cardiology",
    image: cardiologyImg,
    description: "Comprehensive heart care including 2D ECHO, ECG, and specialist consultations.",
  },
  {
    id: 3,
    name: "Orthopaedics",
    image: orthopaedicsImg,
    description: "Expert joint replacement, shoulder surgery, and arthroscopy by fellowship-trained surgeons.",
  },
  {
    id: 4,
    name: "Gastroenterology",
    image: gastroImg,
    description: "Advanced digestive care from AIG-affiliated gastroenterologists and surgeons.",
  },
  {
    id: 5,
    name: "Neurology",
    image: neurologyImg,
    description: "Expert neurology and neurosurgery for complex brain and spine conditions.",
  },
  {
    id: 6,
    name: "Gynaecology",
    image: gynaeImg,
    description: "Comprehensive women's health care, obstetrics, and gynaecological services.",
  },
  {
    id: 7,
    name: "Nephrology",
    image: nephrologyImg,
    description: "Specialized kidney care, dialysis support, and nephrology consultations.",
  },
  {
    id: 8,
    name: "Urology",
    image: urologyImg,
    description: "Minimally invasive urological procedures and surgical expertise.",
  },
  {
    id: 9,
    name: "General Surgery",
    image: generalSurgImg,
    description: "Advanced laparoscopic and general surgical procedures with precision.",
  },
  {
    id: 10,
    name: "Paediatrics",
    image: paediatricsImg,
    description: "Dedicated child care with paediatric gastroenterology and general paediatrics.",
  },
  {
    id: 11,
    name: "ENT",
    image: entImg,
    description: "Ear, nose, and throat care for all ages by experienced specialists.",
  },
  {
    id: 12,
    name: "Anaesthesiology",
    image: anaesthImg,
    description: "Safe and expert anaesthesia services for surgical and critical care settings.",
  },
];
