import { IoMdFlower } from 'react-icons/io/index';

import { Item } from '../item';
<<<<<<< HEAD
import { useI18n } from '@/hooks/use-i18n';
=======
>>>>>>> b6eb5d02316342552812df149042899a4dd1e779

interface BreathingExerciseProps {
  open: () => void;
}

export function BreathingExercise({ open }: BreathingExerciseProps) {
<<<<<<< HEAD
  const { t } = useI18n();

  return (
    <Item
      icon={<IoMdFlower />}
      label={t.menu.items.breathing}
=======
  return (
    <Item
      icon={<IoMdFlower />}
      label="呼吸练习"
>>>>>>> b6eb5d02316342552812df149042899a4dd1e779
      shortcut="Shift + B"
      onClick={open}
    />
  );
}
