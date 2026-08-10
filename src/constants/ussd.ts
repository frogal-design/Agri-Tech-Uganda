export type Language = 'ENGLISH' | 'SWAHILI' | 'LUGANDA' | 'LUO';

export interface LanguageInfo {
  code: Language;
  label: string;
  description: string;
}

export const LANGUAGES: LanguageInfo[] = [
  {
    code: 'ENGLISH',
    label: 'ENGLISH',
    description: 'Default System Language'
  },
  {
    code: 'SWAHILI',
    label: 'SWAHILI',
    description: 'Regional Standard'
  },
  {
    code: 'LUGANDA',
    label: 'LUGANDA',
    description: 'Central Region Dialect'
  },
  {
    code: 'LUO',
    label: 'LUO',
    description: 'Northern Region Dialect'
  }
];

export const USSD_MENU_HEADERS: Record<Language, string> = {
  ENGLISH: 'AGRI-PULSE MAIN MENU',
  SWAHILI: 'MENU KUU YA AGRI-PULSE',
  LUGANDA: 'EMENYU ENKULU EYA AGRI-PULSE',
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
    '1. Bei za Sokoni',
    '2. Weka Tangazo',
    '3. Magonjwa ya Mazao',
    '4. Utabiri wa Hali ya Hewa',
    '5. Mipangilio ya Akaunti',
    '6. Msaada / Maoni'
  ],
  LUGANDA: [
    '1. Embeeyi z\'Obutale',
    '2. Teekawo ekirango',
    '3. Endwadde z\'Ebirime',
    '4. Okuteebereza kw\'Obudde',
    '5. Enteekateeka z\'Eyakawunti',
    '6. Obuyambi / Okuddamu'
  ],
  LUO: [
    '1. Wel me Pur',
    '2. Keto Lanyut',
    '3. Two me Anyigirime',
    '4. Kot Liyika',
    '5. Keto Tic Cwiny',
    '6. Kony / Duogo Lok'
  ]
};
