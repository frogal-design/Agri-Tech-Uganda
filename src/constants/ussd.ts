export type Language = 'ENGLISH' | 'SWAHILI' | 'LUGANDA' | 'LUO';

export interface LanguageInfo {
  code: Language;
  name: string;
  description: string;
}

export const LANGUAGES: LanguageInfo[] = [
  { code: 'ENGLISH', name: 'ENGLISH', description: 'Default System Language' },
  { code: 'SWAHILI', name: 'SWAHILI', description: 'Regional Standard' },
  { code: 'LUGANDA', name: 'LUGANDA', description: 'Central Region Dialect' },
  { code: 'LUO', name: 'LUO', description: 'Northern Region Dialect' }
];

export const USSD_MENU_HEADERS: Record<Language, string> = {
  ENGLISH: 'AGRI-PULSE MAIN MENU',
  SWAHILI: 'ORODHA KUU YA AGRI-PULSE',
  LUGANDA: 'OLUKALALA LWA AGRI-PULSE',
  LUO: 'AGRI-PULSE MENY MA MA DIER'
};

export const USSD_MENU_ITEMS: Record<Language, string[]> = {
  ENGLISH: [
    '1. Market Prices',
    '2. Post Advertisement',
    '3. Crop Diseases',
    '4. Weather Forecast',
    '5. Account Settings',
    '6. Help / Feedback'
  ],
  SWAHILI: [
    '1. Bei za Sokoni',
    '2. Weka Tangazo',
    '3. Magonjwa ya Mazao',
    '4. Utabiri wa Hali ya Hewa',
    '5. Mipangilio ya Akaunti',
    '6. Msaada / Maoni'
  ],
  LUGANDA: [
    '1. Eby’obuguzi mu Katale',
    '2. Teekawo ekirango',
    '3. Endwadde z’ebimera',
    '4. Okutabula kw’obudde',
    '5. Enteekateeka z’akawunti',
    '6. Obuyambi / Okusembya'
  ],
  LUO: [
    '1. Wel me Pur',
    '2. Ket Lany',
    '3. Two me Anyigirime',
    '4. Kite me Yamo',
    '5. Kano Akaunti',
    '6. Kony / Tam'
  ]
};
