import { create } from 'zustand';
import { persist } from 'zustand/middleware';

import { type Language } from '@/i18n/translations';

interface LanguageStore {
  language: Language;
  setLanguage: (language: Language) => void;
}

export const useLanguageStore = create<LanguageStore>()(
  persist(
    set => ({
      language: 'zh',
      setLanguage: language => set({ language }),
    }),
    {
      name: 'moodist-language',
    },
  ),
);
