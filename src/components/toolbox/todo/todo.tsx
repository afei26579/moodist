import { Modal } from '@/components/modal';
import { Form } from './form';
import { Todos } from './todos';

import styles from './todo.module.css';

interface TodoProps {
  onClose: () => void;
  show: boolean;
}

export function Todo({ onClose, show }: TodoProps) {
  return (
    <Modal show={show} onClose={onClose}>
      <header className={styles.header}>
        <h2 className={styles.title}>待办清单</h2>
        <p className={styles.desc}>一个简洁好用的待办清单。</p>
      </header>

      <Form />
      <Todos />
    </Modal>
  );
}
