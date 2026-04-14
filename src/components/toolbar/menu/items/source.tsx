import { LuGithub } from 'react-icons/lu/index';

import { Item } from '../item';
<<<<<<< HEAD
import { useI18n } from '@/hooks/use-i18n';

export function Source() {
  const { t } = useI18n();

=======

export function Source() {
>>>>>>> b6eb5d02316342552812df149042899a4dd1e779
  return (
    <Item
      href="https://github.com/remvze/moodist"
      icon={<LuGithub />}
<<<<<<< HEAD
      label={t.menu.items.source}
=======
      label="源码"
>>>>>>> b6eb5d02316342552812df149042899a4dd1e779
    />
  );
}
