import { IoShareSocialSharp } from 'react-icons/io5/index';

import { Item } from '../item';

import { useSoundStore } from '@/stores/sound';
<<<<<<< HEAD
import { useI18n } from '@/hooks/use-i18n';
=======
>>>>>>> b6eb5d02316342552812df149042899a4dd1e779

interface ShareProps {
  open: () => void;
}

export function Share({ open }: ShareProps) {
  const noSelected = useSoundStore(state => state.noSelected());
<<<<<<< HEAD
  const { t } = useI18n();
=======
>>>>>>> b6eb5d02316342552812df149042899a4dd1e779

  return (
    <Item
      disabled={noSelected}
      icon={<IoShareSocialSharp />}
<<<<<<< HEAD
      label={t.menu.items.share}
=======
      label="分享声音"
>>>>>>> b6eb5d02316342552812df149042899a4dd1e779
      shortcut="Shift + S"
      onClick={open}
    />
  );
}
