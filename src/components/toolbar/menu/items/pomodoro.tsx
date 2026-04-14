import { MdOutlineAvTimer } from 'react-icons/md/index';

import { Item } from '../item';

import { usePomodoroStore } from '@/stores/pomodoro';
<<<<<<< HEAD
import { useI18n } from '@/hooks/use-i18n';
=======
>>>>>>> b6eb5d02316342552812df149042899a4dd1e779

interface PomodoroProps {
  open: () => void;
}

export function Pomodoro({ open }: PomodoroProps) {
  const running = usePomodoroStore(state => state.running);
<<<<<<< HEAD
  const { t } = useI18n();
=======
>>>>>>> b6eb5d02316342552812df149042899a4dd1e779

  return (
    <Item
      active={running}
      icon={<MdOutlineAvTimer />}
<<<<<<< HEAD
      label={t.menu.items.pomodoro}
=======
      label="番茄钟"
>>>>>>> b6eb5d02316342552812df149042899a4dd1e779
      shortcut="Shift + P"
      onClick={open}
    />
  );
}
