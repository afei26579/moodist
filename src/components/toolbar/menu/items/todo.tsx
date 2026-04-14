import { MdTaskAlt } from 'react-icons/md/index';

import { Item } from '../item';
<<<<<<< HEAD
import { useI18n } from '@/hooks/use-i18n';
=======
>>>>>>> b6eb5d02316342552812df149042899a4dd1e779

interface TodoProps {
  open: () => void;
}

export function Todo({ open }: TodoProps) {
<<<<<<< HEAD
  const { t } = useI18n();

  return (
    <Item
      icon={<MdTaskAlt />}
      label={t.menu.items.todo}
=======
  return (
    <Item
      icon={<MdTaskAlt />}
      label="待办清单"
>>>>>>> b6eb5d02316342552812df149042899a4dd1e779
      shortcut="Shift + T"
      onClick={open}
    />
  );
}
