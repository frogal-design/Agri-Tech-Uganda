export type Language = 'ENGLISH' | 'SWAHILI' | 'LUGANDA' | 'LUO';

export interface LanguageInfo {
  id: Language;
  name: string;
  desc: string;
}

export const LANGUAGES: LanguageInfo[] = [
  { id: 'ENGLISH', name: 'ENGLISH', desc: 'Default System Language' },
  { id: 'SWAHILI', name: 'SWAHILI', desc: 'Regional Standard' },
  { id: 'LUGANDA', name: 'LUGANDA', desc: 'Central Region Dialect' },
  { id: 'LUO', name: 'LUO', desc: 'Northern Region Dialect' }
];

export const USSD_TRANSLATIONS: Record<Language, { header: string; items: string[] }> = {
  ENGLISH: {
    header: "AGRI-PULSE MAIN MENU",
    items: [
      "1. Market Prices",
      "2. Post Advertisement",
      "3. Crop Diseases",
      "4. Weather Forecast",
      "5. Account Settings",
      "6. Help / Feedback"
    ]
  },
  SWAHILI: {
    header: "MENU KUU YA AGRI-PULSE",
    items: [
      "1. Bei za Soko",
      "2. Weka Tangazo",
      "3. Magonjwa ya Mazao",
      "4. Utabiri wa Hali ya Hewa",
      "5. Mpangilio wa Akaunti",
      "6. Msaada / Maoni"
    ]
  },
  LUGANDA: {
    header: "EMENU ENKULU EYA AGRI-PULSE",
    items: [
      "1. Ebinaasigwa mu Butale",
      "2. Teekawo ekirango",
      "3. Endwadde z'Ebirime",
      "4. Okumanya Obudde",
      "5. Enteekateeka z'Eyakawunti",
      "6. Obuyambi / Okusembya"
    ]
  },
  LUO: {
    header: "WIC ALOT ME AGRI-PULSE",
    items: [
      "1. Wel me Pur",
      "2. Keto Lanyut",
      "3. Two me Anyigirime",
      "4. Kot Lyeer Obwolo",
      "5. Yub me Akaunt",
      "6. Kony / Pwoc"
    ]
  }
};
