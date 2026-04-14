import { IoMoonSharp } from 'react-icons/io5/index';

import { useSleepTimerStore } from '@/stores/sleep-timer';
import { Item } from '../item';
<<<<<<< HEAD
import { useI18n } from '@/hooks/use-i18n';
=======
>>>>>>> b6eb5d02316342552812df149042899a4dd1e779

interface SleepTimerProps {
  open: () => void;
}

export function SleepTimer({ open }: SleepTimerProps) {
  const active = useSleepTimerStore(state => state.active);
<<<<<<< HEAD
  const { t } = useI18n();
=======
>>>>>>> b6eb5d02316342552812df149042899a4dd1e779

  return (
    <Item
      active={active}
      icon={<IoMoonSharp />}
<<<<<<< HEAD
      label={t.menu.items.sleepTimer}
=======
      label="睡眠计时器"
>>>>>>> b6eb5d02316342552812df149042899a4dd1e779
      shortcut="Shift + Alt + T"
      onClick={open}
    />
  );
}
