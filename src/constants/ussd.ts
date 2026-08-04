export type Language = 'ENGLISH' | 'SWAHILI' | 'LUGANDA' | 'LUO';

export const LANGUAGES: { code: Language; name: string; description: string }[] = [
  { code: 'ENGLISH', name: 'ENGLISH', description: 'Default System Language' },
  { code: 'SWAHILI', name: 'SWAHILI', description: 'Regional Standard' },
  { code: 'LUGANDA', name: 'LUGANDA', description: 'Central Region Dialect' },
  { code: 'LUO', name: 'LUO', description: 'Northern Region Dialect' },
];

export const USSD_MENU_HEADERS: Record<Language, string> = {
  ENGLISH: 'AGRI-PULSE MAIN MENU',
  SWAHILI: 'AGRI-PULSE ORIDHA KUU',
  LUGANDA: 'AGRI-PULSE ENKALALA ENKULU',
  LUO: 'AGRI-PULSE PWONY MADUONG',
};

export const USSD_MENU_ITEMS: Record<Language, string[]> = {
  ENGLISH: [
    '1. Market Prices',
    '2. Post Advertisement',
    '3. Crop Diseases',
    '4. Weather Forecast',
    '5. Account Settings',
    '6. Help / Feedback',
  ],
  SWAHILI: [
    '1. Bei za Sokoni',
    '2. Weka Tangazo',
    '3. Magonjwa ya Mazao',
    '4. Utabiri wa Hali ya Hewa',
    '5. Mipangilio ya Akaunti',
    '6. Msaada / Maoni',
  ],
  LUGANDA: [
    '1. Eby’obuguzi n’Ebisale',
    '2. Teekawo ekirango',
    '3. Endwadde z’Ebirime',
    '4. Okutebereza K’obudde',
    '5. Enteekateeka z’Akawunti',
    '6. Obuyambi / Okusembya',
  ],
  LUO: [
    '1. Wel me Pur',
    '2. Keto Lanyut',
    '3. Two me Anyigirime',
    '4. Yamo ki Kiri',
    '5. Keto Tic me Akawunt',
    '6. Kony / Tam',
  ],
};

export const BASELINE_LOGS = [
  ' > SESSION_START ID: 98221-UA',
  ' > POLLING GSM_NETWORK: OK',
  ' > HANDSHAKE *135#: SUCCESS',
  ' > RENDER_MENU: STEP_2_MAIN_OPTIONS'
];
