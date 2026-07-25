export type Language = 'ENGLISH' | 'SWAHILI' | 'LUGANDA' | 'LUO';

export interface LanguageOption {
  id: Language;
  name: string;
  description: string;
}

export const LANGUAGES: LanguageOption[] = [
  { id: 'ENGLISH', name: 'ENGLISH', description: 'Default System Language' },
  { id: 'SWAHILI', name: 'SWAHILI', description: 'Regional Standard' },
  { id: 'LUGANDA', name: 'LUGANDA', description: 'Central Region Dialect' },
  { id: 'LUO', name: 'LUO', description: 'Northern Region Dialect' }
];

export const USSD_MENU_HEADERS: Record<Language, string> = {
  ENGLISH: 'AGRI-PULSE MAIN MENU',
  SWAHILI: 'AGRI-PULSE MENU KUU',
  LUGANDA: 'AGRI-PULSE EMENYU ENKULU',
  LUO: 'AGRI-PULSE YOO ME PUR'
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
    '1. Eby’obuguzi mu Katale',
    '2. Teekawo ekirango',
    '3. Endwadde z’ebimera',
    '4. Olutimbe lw’obudde',
    '5. Enteekateeka z’akawunti',
    '6. Obuyambi / Okusembya'
  ],
  LUO: [
    '1. Wel me Pur',
    '2. Ket Lanyut me Pur',
    '3. Two me Anyigirime',
    '4. Kite me Yamo',
    '5. Yub me Akaunt',
    '6. Kony / Tam'
  ]
};
