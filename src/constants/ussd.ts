export type Language = 'ENGLISH' | 'SWAHILI' | 'LUGANDA' | 'LUO';

export const LANGUAGES: { id: Language; label: string; desc: string }[] = [
  { id: 'ENGLISH', label: 'ENGLISH', desc: 'Default System Language' },
  { id: 'SWAHILI', label: 'SWAHILI', desc: 'Regional Standard' },
  { id: 'LUGANDA', label: 'LUGANDA', desc: 'Central Region Dialect' },
  { id: 'LUO', label: 'LUO', desc: 'Northern Region Dialect' }
];

export const USSD_MENU_HEADERS: Record<Language, string> = {
  ENGLISH: 'AGRI-PULSE MAIN MENU',
  SWAHILI: 'MENYU KUU YA AGRI-PULSE',
  LUGANDA: 'EMENYU ENKULU EYA AGRI-PULSE',
  LUO: 'ALUOT MADIT ME AGRI-PULSE'
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
    '1. Ebeeyi z\'Akasale',
    '2. Teekawo ekirango',
    '3. Endwadde z\'Ebirime',
    '4. Okulagula kumupewo',
    '5. Enteekateeka z\'Akawunti',
    '6. Obuyambi / Okusembyesa'
  ],
  LUO: [
    '1. Wel me Pur',
    '2. Ket Lanyut',
    '3. Two me Anyigirime',
    '4. Kot ki Yamo',
    '5. Yub me Akaunt',
    '6. Kony / Tam'
  ]
};
