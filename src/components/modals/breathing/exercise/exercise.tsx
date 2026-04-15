import { useState, useEffect, useMemo, useCallback } from 'react';
import { motion } from 'motion/react';

import { padNumber } from '@/helpers/number';
import { useI18n } from '@/hooks/use-i18n';

import styles from './exercise.module.css';

type Exercise = 'box' | 'resonant' | 'fourSevenEight';
type Phase = 'inhale' | 'exhale' | 'holdInhale' | 'holdExhale';

const EXERCISE_PHASES: Record<Exercise, Phase[]> = {
  box: ['inhale', 'holdInhale', 'exhale', 'holdExhale'],
  fourSevenEight: ['inhale', 'holdInhale', 'exhale'],
  resonant: ['inhale', 'exhale'],
};

const EXERCISE_DURATIONS: Record<Exercise, Partial<Record<Phase, number>>> = {
  box: { exhale: 4, holdExhale: 4, holdInhale: 4, inhale: 4 },
  fourSevenEight: { exhale: 8, holdInhale: 7, inhale: 4 },
  resonant: { exhale: 5, inhale: 5 },
};

export function Exercise() {
  const { t } = useI18n();
  const [selectedExercise, setSelectedExercise] =
    useState<Exercise>('fourSevenEight');
  const [phaseIndex, setPhaseIndex] = useState(0);

  const phases = useMemo(
    () => EXERCISE_PHASES[selectedExercise],
    [selectedExercise],
  );
  const durations = useMemo(
    () => EXERCISE_DURATIONS[selectedExercise],
    [selectedExercise],
  );

  const phaseLabels: Record<Phase, string> = useMemo(
    () => ({
      exhale: t.breathing.exhale,
      holdExhale: t.common.hold,
      holdInhale: t.common.hold,
      inhale: t.breathing.inhale,
    }),
    [t],
  );

  const exerciseLabels: Record<Exercise, string> = useMemo(
    () => ({
      box: t.breathing.boxBreathing,
      fourSevenEight: t.breathing.fourSevenEight,
      resonant: t.breathing.resonant,
    }),
    [t],
  );

  const currentPhase = phases[phaseIndex];
  const animationVariants = useMemo(
    () => ({
      exhale: {
        transform: 'translate(-50%, -50%) scale(1)',
        transition: { duration: durations.exhale },
      },
      holdExhale: {
        transform: 'translate(-50%, -50%) scale(1)',
        transition: { duration: durations.holdExhale },
      },
      holdInhale: {
        transform: 'translate(-50%, -50%) scale(1.5)',
        transition: { duration: durations.holdInhale },
      },
      inhale: {
        transform: 'translate(-50%, -50%) scale(1.5)',
        transition: { duration: durations.inhale },
      },
    }),
    [durations],
  );

  const resetExercise = useCallback(() => {
    setPhaseIndex(0);
  }, []);

  const updatePhase = useCallback(() => {
    setPhaseIndex(prevIndex => (prevIndex + 1) % phases.length);
  }, [phases.length]);

  useEffect(() => {
    resetExercise();
  }, [selectedExercise, resetExercise]);

  useEffect(() => {
    const intervalDuration = (durations[currentPhase] || 4) * 1000;
    const interval = setInterval(updatePhase, intervalDuration);

    return () => clearInterval(interval);
  }, [currentPhase, durations, updatePhase]);

  const [timer, setTimer] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => setTimer(prev => prev + 1), 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className={styles.exercise}>
        <div className={styles.timer}>
          {padNumber(Math.floor(timer / 60))}:{padNumber(timer % 60)}
        </div>

        <motion.div
          animate={currentPhase}
          className={styles.circle}
          key={selectedExercise}
          variants={animationVariants}
        />
        <p className={styles.phase}>{phaseLabels[currentPhase]}</p>
      </div>

      <div className={styles.selectWrapper}>
        <select
          className={styles.selectBox}
          value={selectedExercise}
          onChange={e => setSelectedExercise(e.target.value as Exercise)}
        >
          {(Object.keys(EXERCISE_PHASES) as Exercise[]).map(exercise => (
            <option key={exercise} value={exercise}>
              {exerciseLabels[exercise]}
            </option>
          ))}
        </select>
      </div>
    </>
  );
}
