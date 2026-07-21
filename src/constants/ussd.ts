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
  { code: 'LUO', name: 'LUO', desc: 'Northern Region Dialect' },
];

export const USSD_MENU_HEADERS: Record<Language, string> = {
  ENGLISH: 'AGRI-PULSE MAIN MENU',
  SWAHILI: 'ORODHA KUU YA AGRI-PULSE',
  LUGANDA: 'OLUKALALA LWA AGRI-PULSE',
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
    '1. Bei za Sokoni',
    '2. Weka Tangazo',
    '3. Magonjwa ya Mazao',
    '4. Utabiri wa Hali ya Hewa',
    '5. Mipangilio ya Akaunti',
    '6. Msaada / Maoni'
  ],
  LUGANDA: [
    '1. Eby’obuguzi eby’ebbeeyi',
    '2. Teekawo ekirango',
    '3. Obulwadde bw’ebimera',
    '4. Okulagula kw’obudde',
    '5. Enteekateeka z’akaunti',
    '6. Obuyambi / Okuddamu'
  ],
  LUO: [
    '1. Wel me Pur',
    '2. Keco Nyig',
    '3. Two me Anyigirime',
    '4. Kod Alodi',
    '5. Jami me Akaun',
    '6. Kony / Tam'
  ]
};

export const BASELINE_LOGS = [
  '> SESSION_START ID: 98221-UA',
  '> POLLING GSM_NETWORK: OK',
  '> HANDSHAKE *135#: SUCCESS',
  '> RENDER_MENU: STEP_2_MAIN_OPTIONS'
];
