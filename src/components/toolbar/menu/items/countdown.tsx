import { MdOutlineTimer } from 'react-icons/md/index';

import { Item } from '../item';
<<<<<<< HEAD
import { useI18n } from '@/hooks/use-i18n';
=======
>>>>>>> b6eb5d02316342552812df149042899a4dd1e779

interface CountdownProps {
  open: () => void;
}

export function Countdown({ open }: CountdownProps) {
<<<<<<< HEAD
  const { t } = useI18n();

  return (
    <Item
      icon={<MdOutlineTimer />}
      label={t.menu.items.countdown}
=======
  return (
    <Item
      icon={<MdOutlineTimer />}
      label="倒计时"
>>>>>>> b6eb5d02316342552812df149042899a4dd1e779
      shortcut="Shift + C"
      onClick={open}
    />
  );
}
