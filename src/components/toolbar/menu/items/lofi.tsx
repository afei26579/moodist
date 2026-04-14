import { IoIosMusicalNote } from 'react-icons/io/index';

import { Item } from '../item';
<<<<<<< HEAD
import { useI18n } from '@/hooks/use-i18n';
=======
>>>>>>> b6eb5d02316342552812df149042899a4dd1e779

interface LofiProps {
  open: () => void;
}

export function Lofi({ open }: LofiProps) {
<<<<<<< HEAD
  const { t } = useI18n();

  return <Item icon={<IoIosMusicalNote />} label={t.menu.items.lofi} onClick={open} />;
=======
  return (
    <Item icon={<IoIosMusicalNote />} label="Lofi 音乐播放器" onClick={open} />
  );
>>>>>>> b6eb5d02316342552812df149042899a4dd1e779
}
