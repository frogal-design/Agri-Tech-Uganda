export type Language = 'ENGLISH' | 'SWAHILI' | 'LUGANDA' | 'LUO';

export interface LanguageOption {
  code: Language;
  label: string;
  desc: string;
}

export const LANGUAGES: LanguageOption[] = [
  { code: 'ENGLISH', label: 'ENGLISH', desc: 'Default System Language' },
  { code: 'SWAHILI', label: 'SWAHILI', desc: 'Regional Standard' },
  { code: 'LUGANDA', label: 'LUGANDA', desc: 'Central Region Dialect' },
  { code: 'LUO', label: 'LUO', desc: 'Northern Region Dialect' }
];

export const USSD_MENU_HEADERS: Record<Language, string> = {
  ENGLISH: 'AGRI-PULSE MAIN MENU',
  SWAHILI: 'MENU KUU YA AGRI-PULSE',
  LUGANDA: 'OLUKALALA LWA AGRI-PULSE',
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
    '1. Bei za Soko',
    '2. Weka Tangazo',
    '3. Magonjwa ya Mazao',
    '4. Utabiri wa Hewa',
    '5. Mipangilio',
    '6. Msaada'
  ],
  LUGANDA: [
    '1. Eby’obutale',
    '2. Teekawo ekirango',
    '3. Endwadde z’Ebirime',
    '4. Okumanya Obudde',
    '5. Enteekateeka',
    '6. Buyambi'
  ],
  LUO: [
    '1. Wel me Pur',
    '2. Keto Ad',
    '3. Two me Anyigirime',
    '4. Kit me Yamo',
    '5. Kakiri',
    '6. Kony'
  ]
};

export const BASELINE_LOGS: string[] = [
  '> SESSION_START ID: 98221-UA',
  '> POLLING GSM_NETWORK: OK',
  '> HANDSHAKE *135#: SUCCESS',
  '> RENDER_MENU: STEP_2_MAIN_OPTIONS'
];
