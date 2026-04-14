import { MdKeyboardCommandKey } from 'react-icons/md/index';

import { Item } from '../item';
<<<<<<< HEAD
import { useI18n } from '@/hooks/use-i18n';
=======
>>>>>>> b6eb5d02316342552812df149042899a4dd1e779

interface ShortcutsProps {
  open: () => void;
}

export function Shortcuts({ open }: ShortcutsProps) {
<<<<<<< HEAD
  const { t } = useI18n();

  return (
    <Item
      icon={<MdKeyboardCommandKey />}
      label={t.menu.items.shortcuts}
=======
  return (
    <Item
      icon={<MdKeyboardCommandKey />}
      label="快捷键"
>>>>>>> b6eb5d02316342552812df149042899a4dd1e779
      shortcut="Shift + H"
      onClick={open}
    />
  );
}
