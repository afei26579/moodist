import { TbWaveSine } from 'react-icons/tb/index';

import { Item } from '../item';
<<<<<<< HEAD
import { useI18n } from '@/hooks/use-i18n';
=======
>>>>>>> b6eb5d02316342552812df149042899a4dd1e779

interface IsochronicProps {
  open: () => void;
}

export function Isochronic({ open }: IsochronicProps) {
<<<<<<< HEAD
  const { t } = useI18n();

  return <Item icon={<TbWaveSine />} label={t.menu.items.isochronic} onClick={open} />;
=======
  return <Item icon={<TbWaveSine />} label="等时音" onClick={open} />;
>>>>>>> b6eb5d02316342552812df149042899a4dd1e779
}
