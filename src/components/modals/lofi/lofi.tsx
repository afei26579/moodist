import { useState } from 'react';
import YouTube from 'react-youtube';

import { Modal } from '@/components/modal/modal';
<<<<<<< HEAD
import { useI18n } from '@/hooks/use-i18n';
=======
>>>>>>> b6eb5d02316342552812df149042899a4dd1e779

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
<<<<<<< HEAD
    titleKey: 'lofiHipHop' as const,
=======
    title: 'lofi hip hop radio',
>>>>>>> b6eb5d02316342552812df149042899a4dd1e779
  },
  {
    channel: 'Lofi Girl',
    id: '4xDzrJKXOOY',
<<<<<<< HEAD
    titleKey: 'synthwave' as const,
=======
    title: 'synthwave radio',
>>>>>>> b6eb5d02316342552812df149042899a4dd1e779
  },
  {
    channel: 'Lofi Girl',
    id: 'P6Segk8cr-c',
<<<<<<< HEAD
    titleKey: 'sadLofi' as const,
=======
    title: 'sad lofi radio',
>>>>>>> b6eb5d02316342552812df149042899a4dd1e779
  },
  {
    channel: 'Lofi Girl',
    id: 'S_MOd40zlYU',
<<<<<<< HEAD
    titleKey: 'darkAmbient' as const,
=======
    title: 'dark ambient radio',
>>>>>>> b6eb5d02316342552812df149042899a4dd1e779
  },
  {
    channel: 'Lofi Girl',
    id: 'TtkFsfOP9QI',
<<<<<<< HEAD
    titleKey: 'peacefulPiano' as const,
=======
    title: 'peaceful piano radio',
>>>>>>> b6eb5d02316342552812df149042899a4dd1e779
  },
];

export function LofiModal({ onClose, show }: LofiProps) {
<<<<<<< HEAD
  const { t } = useI18n();
=======
>>>>>>> b6eb5d02316342552812df149042899a4dd1e779
  const [isAccepted, setIsAccepted] = useState(false);

  return (
    <Modal persist show={show} onClose={onClose}>
<<<<<<< HEAD
      <h1 className={styles.title}>{t.lofi.title}</h1>

      {!isAccepted ? (
        <div className={styles.notice}>
          <p>{t.lofi.notice}</p>

          <div className={styles.buttons}>
            <button onClick={onClose}>{t.common.cancel}</button>
=======
      <h1 className={styles.title}>Lofi Music Player</h1>

      {!isAccepted ? (
        <div className={styles.notice}>
          <p>
            This feature plays music using embedded YouTube videos. By
            continuing, you agree to connect to YouTube, which may collect data
            in accordance with their privacy policy. We do not control or track
            this data.
          </p>

          <div className={styles.buttons}>
            <button onClick={onClose}>Cancel</button>
>>>>>>> b6eb5d02316342552812df149042899a4dd1e779
            <button
              className={styles.primary}
              onClick={() => setIsAccepted(true)}
            >
<<<<<<< HEAD
              {t.common.continue}
=======
              Continue
>>>>>>> b6eb5d02316342552812df149042899a4dd1e779
            </button>
          </div>
        </div>
      ) : (
        <div className={styles.videos}>
          {videos.map((video, index) => (
            <div className={styles.video} key={video.id}>
              <h2>
                <span className={styles.index}>{padNumber(index + 1, 2)}</span>{' '}
<<<<<<< HEAD
                <strong>{video.channel}</strong> <span>/</span>{' '}
                {t.lofi.videos[video.titleKey]}
=======
                <strong>{video.channel}</strong> <span>/</span> {video.title}
>>>>>>> b6eb5d02316342552812df149042899a4dd1e779
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
