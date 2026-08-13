export const LANGUAGES = [
  { id: 'ENGLISH', label: 'ENGLISH', desc: 'Default System Language' },
  { id: 'SWAHILI', label: 'SWAHILI', desc: 'Regional Standard' },
  { id: 'LUGANDA', label: 'LUGANDA', desc: 'Central Region Dialect' },
  { id: 'LUO', label: 'LUO', desc: 'Northern Region Dialect' }
] as const;

export type Language = typeof LANGUAGES[number]['id'];

export const USSD_MENU_HEADERS: Record<Language, string> = {
  ENGLISH: 'AGRI-PULSE MAIN MENU',
  SWAHILI: 'MENU KUU YA AGRI-PULSE',
  LUGANDA: 'EMENYU ENKULU YA AGRI-PULSE',
  LUO: 'MENU MADIT AGRI-PULSE'
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
    '3. Ndwadde z’Ebirime',
    '4. Okulagula Obudde',
    '5. Enteekateeka z’Ekiwandiiko',
    '6. Buyambi / Okubala'
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
