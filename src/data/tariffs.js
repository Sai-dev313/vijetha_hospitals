// ============================================================
// VIJETHA HOSPITAL — Hospital Tariffs
// Extracted from hospital tariff board (Reg.No. 007/2022)
// ============================================================

export const tariffs = [
  { category: "Consultation", item: "OP Consultation Fee", charge: "₹500/-", note: "Valid for 10 Days" },
  { category: "Consultation", item: "Emergency Consultation", charge: "₹1,000/-", note: "9pm to 9am" },
  { category: "Consultation", item: "Admission Fee", charge: "₹500/-", note: "" },
  { category: "Consultation", item: "Super Specialist OP Fee", charge: "₹1,000/-", note: "Per Visit" },
  { category: "Consultation", item: "IP Consultation", charge: "₹1,500/-", note: "Per Visit" },
  { category: "Emergency", item: "Casualty / Observation Charges", charge: "₹4,000/-", note: "" },
  { category: "Emergency", item: "ICU Bed Charges", charge: "₹7,000/-", note: "" },
  { category: "Daily", item: "Duty Doctor Charges", charge: "₹1,000/-", note: "Per Day" },
  { category: "Daily", item: "Nursing Charges", charge: "₹800/-", note: "Per Day" },
  { category: "Daily", item: "Monitor Charges", charge: "₹1,000/-", note: "Per Day" },
  { category: "Daily", item: "Housekeeping Charges", charge: "₹600/-", note: "Per Day" },
  { category: "Room", item: "General Ward", charge: "₹3,000/-", note: "Per Day" },
  { category: "Room", item: "Special Room", charge: "₹3,500/-", note: "Per Day" },
  { category: "Room", item: "AC Room", charge: "₹4,000/-", note: "Per Day" },
  { category: "Equipment", item: "Ventilator Charges", charge: "₹12,000/-", note: "Per Day" },
  { category: "Equipment", item: "Oxygen Charges", charge: "₹300/-", note: "Per Hour" },
  { category: "Records", item: "Medical Records", charge: "₹500/-", note: "One Time" },
  { category: "Records", item: "MLC — OP/IP", charge: "₹5,000–₹10,000/-", note: "Depends upon Distance" },
  { category: "Equipment", item: "Syringe / Infusion Pump", charge: "₹1,500/-", note: "Per Day" },
  { category: "Equipment", item: "Nebulisation Charges", charge: "₹200/-", note: "Per Neb" },
  { category: "Diagnostics", item: "ECG", charge: "₹300/-", note: "" },
  { category: "Diagnostics", item: "X-Ray", charge: "₹400/-", note: "Per View" },
  { category: "Diagnostics", item: "2D ECHO", charge: "₹2,500/-", note: "" },
];

export const tariffCategories = ["All", "Consultation", "Emergency", "Daily", "Room", "Equipment", "Diagnostics", "Records"];

export const tariffNote = "NO FIXED CHARGES TO CRITICAL & COMPLICATED CASES";

export default tariffs;
