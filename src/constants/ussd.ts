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
  SWAHILI: 'MENYU KUU YA AGRI-PULSE',
  LUGANDA: 'OLUKALALA LWA AGRI-PULSE',
  LUO: 'YOO ME NYINGI AGRI-PULSE'
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
    '1. Eby’obusuubuzi',
    '2. Teekawo ekirango',
    '3. Endwadde z’ebimera',
    '4. Okubala kw’obudde',
    '5. Enteekateeka z’akaunti',
    '6. Obuyambi / Okuddamu'
  ],
  LUO: [
    '1. Wel me Pur',
    '2. Ket Lanyut',
    '3. Two me Anyigirime',
    '4. Kot ki Yamo',
    '5. Yub me Akaunt',
    '6. Kony / Lok'
  ]
};

export const BASELINE_LOGS = [
  ' > SESSION_START ID: 98221-UA',
  ' > POLLING GSM_NETWORK: OK',
  ' > HANDSHAKE *135#: SUCCESS',
  ' > RENDER_MENU: STEP_2_MAIN_OPTIONS'
];
