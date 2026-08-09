export type Language = 'ENGLISH' | 'SWAHILI' | 'LUGANDA' | 'LUO';

export interface LanguageOption {
  code: Language;
  name: string;
  desc: string;
}

export const LANGUAGES: LanguageOption[] = [
  { code: 'ENGLISH', name: 'ENGLISH', desc: 'Default System Language' },
  { code: 'SWAHILI', name: 'SWAHILI', desc: 'Regional Standard' },
  { code: 'LUGANDA', name: 'LUGANDA', desc: 'Central Region Dialect' },
  { code: 'LUO', name: 'LUO', desc: 'Northern Region Dialect' }
];

export const USSD_MENU_HEADERS: Record<Language, string> = {
  ENGLISH: 'AGRI-PULSE MAIN MENU',
  SWAHILI: 'MENYU KUU YA AGRI-PULSE',
  LUGANDA: 'EMENYU ENKULU EYA AGRI-PULSE',
  LUO: 'YOO ME AGRI-PULSE'
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
    '4. Utabiri wa Hali ya Hawa',
    '5. Mipangilio ya Akaunti',
    '6. Msaada / Maoni'
  ],
  LUGANDA: [
    '1. Ebisale by\'Atale',
    '2. Teekawo ekirango',
    '3. Endwadde z\'Ebirime',
    '4. Okulagula Obudde',
    '5. Enteekateeka z\'Akaunti',
    '6. Obuyambi / Okusemba'
  ],
  LUO: [
    '1. Wel me Pur',
    '2. Ket Lanyut',
    '3. Two me Anyigirime',
    '4. Ododo me Yamo',
    '5. Kak me Akwan',
    '6. Kony / Tam'
  ]
};
