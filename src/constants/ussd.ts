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
  { code: 'LUO', name: 'LUO', description: 'Northern Region Dialect' }
];

export const USSD_MENU_HEADERS: Record<Language, string> = {
  ENGLISH: 'AGRI-PULSE MAIN MENU',
  SWAHILI: 'AGRI-PULSE MENYU KUU',
  LUGANDA: 'AGRI-PULSE EMENYU ENKULU',
  LUO: 'AGRI-PULSE MENYU MADIT'
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
    '1. Eby’obuguzi ebirime',
    '2. Teekawo ekirango',
    '3. Endwadde z’ebirime',
    '4. Okutegeera obudde',
    '5. Entegeka y’akawunti',
    '6. Buyambi / Okudamu'
  ],
  LUO: [
    '1. Wel me Pur',
    '2. Ket Lanyee',
    '3. Two me Anyigirime',
    '4. Kop me Yamo',
    '5. Mipango me Akawunt',
    '6. Kony / Lok me dwoko'
  ]
};
