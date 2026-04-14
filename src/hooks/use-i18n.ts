import { translations } from '@/i18n/translations';
import { useLanguageStore } from '@/stores/language';

export function useI18n() {
  const language = useLanguageStore(state => state.language);

  return {
    language,
    t: translations[language],
  };
}
