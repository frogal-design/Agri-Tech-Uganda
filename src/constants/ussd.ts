export type Language = 'ENGLISH' | 'SWAHILI' | 'LUGANDA' | 'LUO';

export interface LanguageInfo {
  key: Language;
  name: string;
  description: string;
}

export const LANGUAGES: LanguageInfo[] = [
  {
    key: 'ENGLISH',
    name: 'ENGLISH',
    description: 'Default System Language',
  },
  {
    key: 'SWAHILI',
    name: 'SWAHILI',
    description: 'Regional Standard',
  },
  {
    key: 'LUGANDA',
    name: 'LUGANDA',
    description: 'Central Region Dialect',
  },
  {
    key: 'LUO',
    name: 'LUO',
    description: 'Northern Region Dialect',
  },
];

export const USSD_MENU_HEADERS: Record<Language, string> = {
  ENGLISH: 'AGRI-PULSE MAIN MENU',
  SWAHILI: 'MENYU KUU YA AGRI-PULSE',
  LUGANDA: 'OMUKUTU GWA AGRI-PULSE',
  LUO: 'YOO ME AGRI-PULSE',
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
    '1. Bei za Soko',
    '2. Weka Tangazo',
    '3. Magonjwa ya Mazao',
    '4. Utabiri wa Hali ya Hewa',
    '5. Mipangilio ya Akaunti',
    '6. Msaada / Maoni',
  ],
  LUGANDA: [
    '1. Eby\'ebbeeyi',
    '2. Teekawo ekirango',
    '3. Endwadde z\'ebirime',
    '4. Okuteebereza kw\'obudde',
    '5. Enteekateeka z\'akawunti',
    '6. Buyambi / Okubiddamu',
  ],
  LUO: [
    '1. Wel me Pur',
    '2. Kelo Lanyut',
    '3. Two me Anyigirime',
    '4. Kit me Yamo',
    '5. Lok me Akawunt',
    '6. Kony / Tam',
  ],
};
