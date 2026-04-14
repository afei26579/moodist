import { Modal } from '@/components/modal';
import { New } from './new';
import { List } from './list';

import styles from './presets.module.css';

interface PresetsModalProps {
  onClose: () => void;
  show: boolean;
}

export function PresetsModal({ onClose, show }: PresetsModalProps) {
  return (
    <Modal show={show} onClose={onClose}>
<<<<<<< HEAD
      <h2 className={styles.title}>我的预设</h2>
=======
      <h2 className={styles.title}>Presets</h2>
>>>>>>> b6eb5d02316342552812df149042899a4dd1e779
      <New />
      <div className={styles.divider} />
      <List close={onClose} />
    </Modal>
  );
}
