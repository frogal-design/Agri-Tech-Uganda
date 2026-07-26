export type Language = 'ENGLISH' | 'SWAHILI' | 'LUGANDA' | 'LUO';

export interface LanguageOption {
  code: Language;
  name: string;
  description: string;
}

export const LANGUAGES: LanguageOption[] = [
  { code: 'ENGLISH', name: 'ENGLISH', description: 'Default System Language' },
  { code: 'SWAHILI', name: 'SWAHILI', description: 'Regional Standard' },
  { code: 'LUGANDA', name: 'LUGANDA', description: 'Central Region Dialect' },
  { code: 'LUO', name: 'LUO', description: 'Northern Region Dialect' },
];

export const USSD_MENU_HEADERS: Record<Language, string> = {
  ENGLISH: 'AGRI-PULSE MAIN MENU',
  SWAHILI: 'ORODHA KUU YA AGRI-PULSE',
  LUGANDA: 'OMULYANGO OMUKULU GWA AGRI-PULSE',
  LUO: 'YOO MADIT ME AGRI-PULSE',
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
    '1. Bei za Soko',
    '2. Weka Tangazo',
    '3. Magonjwa ya Mazao',
    '4. Utabiri wa Hali ya Hewa',
    '5. Mipangilio ya Akaunti',
    '6. Msaada / Maoni'
  ],
  LUGANDA: [
    '1. Ebisale by\'Akasale',
    '2. Teekawo ekirango',
    '3. Endwadde z\'Ebirime',
    '4. Okulagula kw\'Obudde',
    '5. Enteekateeka z\'Akawunti',
    '6. Buyambi / Okuddamu'
  ],
  LUO: [
    '1. Wel me Pur',
    '2. Ket Lany',
    '3. Two me Anyigirime',
    '4. Lok me Yamo',
    '5. Mako Akwan',
    '6. Kony / Tam'
  ]
};
