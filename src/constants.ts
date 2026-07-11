export type Language = 'ENGLISH' | 'SWAHILI' | 'LUGANDA' | 'LUO';

export const USSD_MENU_HEADERS: Record<Language, string> = {
  ENGLISH: 'AGRI-PULSE MAIN MENU',
  SWAHILI: 'MENU KUU YA AGRI-PULSE',
  LUGANDA: 'MENYU ENKULU EYA AGRI-PULSE',
  LUO: 'MENYU MADIT ME AGRI-PULSE'
};

export const USSD_MENU_ITEMS: Record<Language, string[]> = {
  ENGLISH: ['1. Market Prices', '2. Post Advertisement', '3. Crop Diseases', '4. Weather Forecast', '5. Account Settings', '6. Help / Feedback'],
  SWAHILI: ['1. Bei za Soko', '2. Tuma Tangazo', '3. Magonjwa ya Mazao', '4. Utabiri wa Hali ya Hewa', '5. Mipangilio ya Akaunti', '6. Msaada / Maoni'],
  LUGANDA: ['1. Ebei z\'ebirime', '2. Teekawo ekirango', '3. Obulwadde bw\'ebirime', '4. Okulagula kw\'obudde', '5. Enteekateeka ya akawunti', '6. Buyambi / Okuddamu'],
  LUO: ['1. Wel me cawa', '2. Two me cente', '3. Two me pur', '4. Kit me yamo', '5. Yub me akawunt', '6. Kony / Tam']
};

export const LANGUAGES: { id: Language; label: string; description: string }[] = [
  { id: 'ENGLISH', label: 'ENGLISH', description: 'Default System Language' },
  { id: 'SWAHILI', label: 'SWAHILI', description: 'Regional Standard' },
  { id: 'LUGANDA', label: 'LUGANDA', description: 'Central Region Dialect' },
  { id: 'LUO', label: 'LUO', description: 'Northern Region Dialect' }
];

export const INITIAL_USSD_LOGS = [
  '> SESSION_START ID: 98221-UA',
  '> POLLING GSM_NETWORK: OK',
  '> HANDSHAKE *135#: SUCCESS',
  '> RENDER_MENU: STEP_2_MAIN_OPTIONS'
];
