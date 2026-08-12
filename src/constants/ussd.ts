export type Language = 'ENGLISH' | 'SWAHILI' | 'LUGANDA' | 'LUO';

export interface LanguageOption {
  id: Language;
  label: string;
  desc: string;
}

export const LANGUAGES: LanguageOption[] = [
  { id: 'ENGLISH', label: 'ENGLISH', desc: 'Default System Language' },
  { id: 'SWAHILI', label: 'SWAHILI', desc: 'Regional Standard' },
  { id: 'LUGANDA', label: 'LUGANDA', desc: 'Central Region Dialect' },
  { id: 'LUO', label: 'LUO', desc: 'Northern Region Dialect' },
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
    '1. Eby’obuguzi',
    '2. Teekawo ekirango',
    '3. Obulwadde bw’ebimera',
    '4. Okulagula kw’embeera y’obudde',
    '5. Enteekateeka z’akaunti',
    '6. Obuyambi / Okusembya'
  ],
  LUO: [
    '1. Wel me Pur',
    '2. Miyo Ad',
    '3. Two me Anyigirime',
    '4. Kot ki Yamo',
    '5. Kang Akawunt',
    '6. Kony / Tam'
  ]
};
