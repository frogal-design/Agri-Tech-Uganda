export type Language = 'ENGLISH' | 'SWAHILI' | 'LUGANDA' | 'LUO';

export interface LanguageConfig {
  code: Language;
  name: string;
  description: string;
}

export const LANGUAGES: LanguageConfig[] = [
  { code: 'ENGLISH', name: 'English', description: 'Default System Language' },
  { code: 'SWAHILI', name: 'Swahili', description: 'Regional Standard' },
  { code: 'LUGANDA', name: 'Luganda', description: 'Central Region Dialect' },
  { code: 'LUO', name: 'Luo', description: 'Northern Region Dialect' }
];

export const USSD_MENU_HEADERS: Record<Language, string> = {
  ENGLISH: 'AGRI-PULSE MAIN MENU',
  SWAHILI: 'ORODHA KUU YA AGRI-PULSE',
  LUGANDA: 'EMENYU ENKULU EYA AGRI-PULSE',
  LUO: 'YOO ME PUR ME AGRI-PULSE'
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
    '1. Ebeeyi y\'Ebirime',
    '2. Teekawo ekirango',
    '3. Endwadde z\'Ebirime',
    '4. Okuteebereza kw\'Obudde',
    '5. Enkyukakyuka z\'Akaunti',
    '6. Obuyambi / Okusembya'
  ],
  LUO: [
    '1. Wel me Pur',
    '2. Ket Lango',
    '3. Two me Anyigirime',
    '4. Yore me Kot',
    '5. Ayela me Akaunt',
    '6. Kony / Tam'
  ]
};
