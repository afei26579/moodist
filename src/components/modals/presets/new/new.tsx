import { useState, type FormEvent } from 'react';

import { cn } from '@/helpers/styles';
import { useSoundStore } from '@/stores/sound';
import { usePresetStore } from '@/stores/preset';

import styles from './new.module.css';

export function New() {
  const [name, setName] = useState('');

  const noSelected = useSoundStore(state => state.noSelected());
  const sounds = useSoundStore(state => state.sounds);
  const addPreset = usePresetStore(state => state.addPreset);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!name || noSelected) return;

    const _sounds: Record<string, number> = {};

    Object.keys(sounds)
      .filter(id => sounds[id].isSelected)
      .forEach(id => {
        _sounds[id] = sounds[id].volume;
      });

    addPreset(name, _sounds);

    setName('');
  };

  return (
    <div className={styles.new}>
<<<<<<< HEAD
      <h3 className={styles.title}>新建预设</h3>
=======
      <h3 className={styles.title}>New Preset</h3>
>>>>>>> b6eb5d02316342552812df149042899a4dd1e779

      <form
        className={cn(styles.form, noSelected && styles.disabled)}
        onSubmit={handleSubmit}
      >
        <input
          disabled={noSelected}
<<<<<<< HEAD
          placeholder="预设名称"
=======
          placeholder="Preset's Name"
>>>>>>> b6eb5d02316342552812df149042899a4dd1e779
          required
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
        />
<<<<<<< HEAD
        <button disabled={noSelected}>保存</button>
=======
        <button disabled={noSelected}>Save</button>
>>>>>>> b6eb5d02316342552812df149042899a4dd1e779
      </form>

      {noSelected && (
        <p className={styles.noSelected}>
<<<<<<< HEAD
          创建预设前，请先选择一些声音。
=======
          To make a preset, first select some sounds.
>>>>>>> b6eb5d02316342552812df149042899a4dd1e779
        </p>
      )}
    </div>
  );
}
