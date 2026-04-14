import { useState } from 'react';
import YouTube from 'react-youtube';

import { Modal } from '@/components/modal/modal';
import { useI18n } from '@/hooks/use-i18n';

import styles from './lofi.module.css';
import { padNumber } from '@/helpers/number';

interface LofiProps {
  onClose: () => void;
  show: boolean;
}

const videos = [
  {
    channel: 'Lofi Girl',
    id: 'jfKfPfyJRdk',
    titleKey: 'lofiHipHop' as const,
  },
  {
    channel: 'Lofi Girl',
    id: '4xDzrJKXOOY',
    titleKey: 'synthwave' as const,
  },
  {
    channel: 'Lofi Girl',
    id: 'P6Segk8cr-c',
    titleKey: 'sadLofi' as const,
  },
  {
    channel: 'Lofi Girl',
    id: 'S_MOd40zlYU',
    titleKey: 'darkAmbient' as const,
  },
  {
    channel: 'Lofi Girl',
    id: 'TtkFsfOP9QI',
    titleKey: 'peacefulPiano' as const,
  },
];

export function LofiModal({ onClose, show }: LofiProps) {
  const { t } = useI18n();
  const [isAccepted, setIsAccepted] = useState(false);

  return (
    <Modal persist show={show} onClose={onClose}>
      <h1 className={styles.title}>{t.lofi.title}</h1>

      {!isAccepted ? (
        <div className={styles.notice}>
          <p>{t.lofi.notice}</p>

          <div className={styles.buttons}>
            <button onClick={onClose}>{t.common.cancel}</button>
            <button
              className={styles.primary}
              onClick={() => setIsAccepted(true)}
            >
              {t.common.continue}
            </button>
          </div>
        </div>
      ) : (
        <div className={styles.videos}>
          {videos.map((video, index) => (
            <div className={styles.video} key={video.id}>
              <h2>
                <span className={styles.index}>{padNumber(index + 1, 2)}</span>{' '}
                <strong>{video.channel}</strong> <span>/</span>{' '}
                {t.lofi.videos[video.titleKey]}
              </h2>
              <div className={styles.container}>
                <YouTube iframeClassName={styles.iframe} videoId={video.id} />
              </div>
            </div>
          ))}
        </div>
      )}
    </Modal>
  );
}
