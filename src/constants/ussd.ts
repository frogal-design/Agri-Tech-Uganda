export type Language = 'ENGLISH' | 'SWAHILI' | 'LUGANDA' | 'LUO';

export interface LanguageOption {
  code: Language;
  name: string;
  description: string;
}

export const LANGUAGES: LanguageOption[] = [
  { code: 'ENGLISH', name: 'English', description: 'Default System Language' },
  { code: 'SWAHILI', name: 'Swahili', description: 'Regional Standard' },
  { code: 'LUGANDA', name: 'Luganda', description: 'Central Region Dialect' },
  { code: 'LUO', name: 'Luo', description: 'Northern Region Dialect' }
];

export const USSD_MENU_HEADERS: Record<Language, string> = {
  ENGLISH: 'AGRI-PULSE MAIN MENU',
  SWAHILI: 'MENU KUU YA AGRI-PULSE',
  LUGANDA: 'OMUKUTU GWA AGRI-PULSE',
  LUO: 'AGRI-PULSE MENY MA DUONG'
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
    '1. Eby’emiwendo gy’Obutale',
    '2. Teekawo ekirango',
    '3. Endwadde z’Ebirime',
    '4. Okulagula Obudde',
    '5. Kyusa Ebisente by’Ebyenda',
    '6. Buyambi / Okubiddayo'
  ],
  LUO: [
    '1. Wel me Pur',
    '2. Ket Lanyoo',
    '3. Two me Anyigirime',
    '4. Kor Yamo',
    '5. Yub me Akaunt',
    '6. Kony / Tam'
  ]
};
