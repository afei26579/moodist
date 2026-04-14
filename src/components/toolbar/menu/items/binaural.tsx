import { FaHeadphonesAlt } from 'react-icons/fa/index';

import { Item } from '../item';
<<<<<<< HEAD
import { useI18n } from '@/hooks/use-i18n';
=======
>>>>>>> b6eb5d02316342552812df149042899a4dd1e779

interface BinauralProps {
  open: () => void;
}

export function Binaural({ open }: BinauralProps) {
<<<<<<< HEAD
  const { t } = useI18n();

  return <Item icon={<FaHeadphonesAlt />} label={t.menu.items.binaural} onClick={open} />;
=======
  return <Item icon={<FaHeadphonesAlt />} label="双耳节拍" onClick={open} />;
>>>>>>> b6eb5d02316342552812df149042899a4dd1e779
}
