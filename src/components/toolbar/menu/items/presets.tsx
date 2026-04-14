import { RiPlayListFill } from 'react-icons/ri/index';

import { Item } from '../item';
<<<<<<< HEAD
import { useI18n } from '@/hooks/use-i18n';
=======
>>>>>>> b6eb5d02316342552812df149042899a4dd1e779

interface PresetsProps {
  open: () => void;
}

export function Presets({ open }: PresetsProps) {
<<<<<<< HEAD
  const { t } = useI18n();

  return (
    <Item
      icon={<RiPlayListFill />}
      label={t.menu.items.presets}
=======
  return (
    <Item
      icon={<RiPlayListFill />}
      label="我的预设"
>>>>>>> b6eb5d02316342552812df149042899a4dd1e779
      shortcut="Shift + Alt + P"
      onClick={open}
    />
  );
}
