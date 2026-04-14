import { Modal } from '@/components/modal';
import { Exercise } from './exercise';

import styles from './breathing.module.css';
<<<<<<< HEAD
import { useI18n } from '@/hooks/use-i18n';
=======
>>>>>>> b6eb5d02316342552812df149042899a4dd1e779

interface TimerProps {
  onClose: () => void;
  show: boolean;
}

export function BreathingExerciseModal({ onClose, show }: TimerProps) {
<<<<<<< HEAD
  const { t } = useI18n();

  return (
    <Modal show={show} onClose={onClose}>
      <h2 className={styles.title}>{t.breathing.title}</h2>
=======
  return (
    <Modal show={show} onClose={onClose}>
      <h2 className={styles.title}>Breathing Exercise</h2>
>>>>>>> b6eb5d02316342552812df149042899a4dd1e779
      <Exercise />
    </Modal>
  );
}
