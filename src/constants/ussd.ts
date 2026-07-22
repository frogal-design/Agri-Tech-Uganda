export type Language = 'ENGLISH' | 'SWAHILI' | 'LUGANDA' | 'LUO';

export interface LanguageInfo {
  code: Language;
  name: string;
  desc: string;
}

export const LANGUAGES: LanguageInfo[] = [
  { code: 'ENGLISH', name: 'ENGLISH', desc: 'Default System Language' },
  { code: 'SWAHILI', name: 'SWAHILI', desc: 'Regional Standard' },
  { code: 'LUGANDA', name: 'LUGANDA', desc: 'Central Region Dialect' },
  { code: 'LUO', name: 'LUO', desc: 'Northern Region Dialect' }
];

export const USSD_MENU_HEADERS: Record<Language, string> = {
  ENGLISH: 'AGRI-PULSE MAIN MENU',
  SWAHILI: 'MENU KUU YA AGRI-PULSE',
  LUGANDA: 'EMENYU YA AGRI-PULSE ENKULU',
  LUO: 'YOO ME PUR AGRI-PULSE'
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
    '4. Okulagula Omuyaga',
    '5. Enteekateeka z’Akawunti',
    '6. Obuyambi / Okusembya'
  ],
  LUO: [
    '1. Wel me Pur',
    '2. Ket Lany',
    '3. Two me Anyigirime',
    '4. Yamo me Pur',
    '5. Tic me Akaunt',
    '6. Kony / Tam'
  ]
};

export const BASE_LOGS = [
  '> SESSION_START ID: 98221-UA',
  '> POLLING GSM_NETWORK: OK',
  '> HANDSHAKE *135#: SUCCESS',
  '> RENDER_MENU: STEP_2_MAIN_OPTIONS'
];
