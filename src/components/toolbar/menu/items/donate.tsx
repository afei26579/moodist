import { SiBuymeacoffee } from 'react-icons/si/index';

import { Item } from '../item';
<<<<<<< HEAD
import { useI18n } from '@/hooks/use-i18n';

export function Donate() {
  const { t } = useI18n();

=======

export function Donate() {
>>>>>>> b6eb5d02316342552812df149042899a4dd1e779
  return (
    <Item
      href="https://buymeacoffee.com/remvze"
      icon={<SiBuymeacoffee />}
<<<<<<< HEAD
      label={t.menu.items.donate}
=======
      label="请我喝咖啡"
>>>>>>> b6eb5d02316342552812df149042899a4dd1e779
    />
  );
}
