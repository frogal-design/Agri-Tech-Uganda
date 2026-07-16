export type Language = 'ENGLISH' | 'SWAHILI' | 'LUGANDA' | 'LUO';

export const USSD_MENU_HEADERS: Record<Language, string> = {
  ENGLISH: 'AGRI-PULSE MAIN MENU',
  SWAHILI: 'MENU KUU YA AGRI-PULSE',
  LUGANDA: 'AGRI-PULSE EKYOKULYA OKUSOOKA',
  LUO: 'AGRI-PULSE PWONY ME PUR'
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
    '1. Ebeeyi y\'akatale',
    '2. Teekawo ekirango',
    '3. Obulwadde bw\'ebirime',
    '4. Okulagula embeera y\'obudde',
    '5. Enteekateeka z\'akawunti',
    '6. Obuyambi / Okuddamu'
  ],
  LUO: [
    '1. Wel me Pur',
    '2. Ket Anyigirime',
    '3. Two me Anyigirime',
    '4. Kot me Anyigirime',
    '5. Mung me Anyigirime',
    '6. Kony / Anyigirime'
  ]
};

export const LANGUAGES: { id: Language; label: string; sub: string }[] = [
  { id: 'ENGLISH', label: 'ENGLISH', sub: 'Default System Language' },
  { id: 'SWAHILI', label: 'SWAHILI', sub: 'Regional Standard' },
  { id: 'LUGANDA', label: 'LUGANDA', sub: 'Central Region Dialect' },
  { id: 'LUO', label: 'LUO', sub: 'Northern Region Dialect' }
];
