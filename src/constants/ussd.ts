export const LANGUAGES = [
  { code: 'ENGLISH', label: 'ENGLISH', desc: 'Default System Language' },
  { code: 'SWAHILI', label: 'SWAHILI', desc: 'Regional Standard' },
  { code: 'LUGANDA', label: 'LUGANDA', desc: 'Central Region Dialect' },
  { code: 'LUO', label: 'LUO', desc: 'Northern Region Dialect' }
] as const;

export type Language = typeof LANGUAGES[number]['code'];

export const USSD_MENU_HEADERS: Record<Language, string> = {
  ENGLISH: "AGRI-PULSE MAIN MENU",
  SWAHILI: "ORODHA KUU AGRI-PULSE",
  LUGANDA: "EMENYU ENKULU EY'AGRI-PULSE",
  LUO: "KICOBE MADONG ME AGRI-PULSE"
};

export const USSD_MENU_ITEMS: Record<Language, string[]> = {
  ENGLISH: [
    "1. Market Prices",
    "2. Post Advertisement",
    "3. Crop Diseases",
    "4. Weather Forecast",
    "5. Account Settings",
    "6. Help / Feedback"
  ],
  SWAHILI: [
    "1. Bei za Soko",
    "2. Weka Tangazo",
    "3. Magonjwa ya Mazao",
    "4. Utabiri wa Hali ya Hewa",
    "5. Mipangilio ya Akaunti",
    "6. Msaada / Maoni"
  ],
  LUGANDA: [
    "1. Ebisale by'Akale",
    "2. Teekawo ekirango",
    "3. Endwadde z'Ebirime",
    "4. Okulagula Omukutu gw'Obudde",
    "5. Enteekateeka z'Akaunti",
    "6. Buyambi / Okubidde"
  ],
  LUO: [
    "1. Wel me Pur",
    "2. Keto Anyigirime",
    "3. Two me Anyigirime",
    "4. Kot Kede Yamo",
    "5. Yub me Akaunt",
    "6. Kony / Tam"
  ]
};
