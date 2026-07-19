export type Language = 'ENGLISH' | 'SWAHILI' | 'LUGANDA' | 'LUO';

export interface LanguageOption {
  code: Language;
  label: string;
  description: string;
}

export const LANGUAGES: LanguageOption[] = [
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
  SWAHILI: 'ORODHA KUU YA AGRI-PULSE',
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
    '4. Utabiri wa Hali ya Hewa',
    '5. Mpangilio wa Akaunti',
    '6. Msaada / Maoni'
  ],
  LUGANDA: [
    '1. Ebikyasubulwa',
    '2. Teekawo ekirango',
    '3. Endwadde z\'ebirime',
    '4. Okumanya Obudde',
    '5. Enteekateeka z\'Akawunti',
    '6. Buyambi / Okubiddayo'
  ],
  LUO: [
    '1. Wel me Pur',
    '2. Ket Lanyut',
    '3. Two me Anyigirime',
    '4. Kit me Yamo',
    '5. Kak me Akawunt',
    '6. Kony / Tam'
  ]
};
