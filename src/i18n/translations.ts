export type Language = 'zh' | 'en';

export type TranslationKey =
  | 'alpha'
  | 'beta'
  | 'custom'
  | 'darkAmbient'
  | 'delta'
  | 'gamma'
  | 'lofiHipHop'
  | 'peacefulPiano'
  | 'sadLofi'
  | 'synthwave'
  | 'theta';

type TranslationSchema = {
  common: {
    cancel: string;
    continue: string;
    custom: string;
    hold: string;
    start: string;
    stop: string;
    volume: string;
  };
  menu: {
    ariaLabel: string;
    globalVolume: string;
    language: string;
    languageEnglish: string;
    languageChinese: string;
    items: {
      binaural: string;
      breathing: string;
      countdown: string;
      donate: string;
      lofi: string;
      notepad: string;
      pomodoro: string;
      presets: string;
      share: string;
      shortcuts: string;
      sleepTimer: string;
      source: string;
      todo: string;
      shuffle: string;
      isochronic: string;
    };
  };
  pomodoro: {
    break: string;
    changeTimes: string;
    completed: string;
    longBreak: string;
    pause: string;
    pomodoro: string;
    restart: string;
    start: string;
    title: string;
  };
  breathing: {
    boxBreathing: string;
    exhale: string;
    fourSevenEight: string;
    inhale: string;
    resonant: string;
    title: string;
  };
  binaural: {
    baseFrequency: string;
    beatFrequency: string;
    description: string;
    presets: string;
    title: string;
    presetLabels: Record<TranslationKey, string>;
  };
  isochronic: {
    baseFrequency: string;
    description: string;
    presets: string;
    title: string;
    toneFrequency: string;
    presetLabels: Record<TranslationKey, string>;
  };
  lofi: {
    notice: string;
    title: string;
    videos: Record<TranslationKey, string>;
  };
};

export const translations: Record<Language, TranslationSchema> = {
  en: {
    common: {
      cancel: 'Cancel',
      continue: 'Continue',
      custom: 'Custom',
      hold: 'Hold',
      start: 'Start',
      stop: 'Stop',
      volume: 'Volume',
    },
    menu: {
      ariaLabel: 'Menu',
      globalVolume: 'Global Volume',
      language: 'Language',
      languageEnglish: 'English',
      languageChinese: '中文',
      items: {
        binaural: 'Binaural Beat',
        breathing: 'Breathing Exercise',
        countdown: 'Countdown',
        donate: 'Buy Me a Coffee',
        isochronic: 'Isochronic Tone',
        lofi: 'Lofi Music Player',
        notepad: 'Notepad',
        pomodoro: 'Pomodoro Timer',
        presets: 'My Presets',
        share: 'Share Sounds',
        shortcuts: 'Shortcuts',
        shuffle: 'Shuffle',
        sleepTimer: 'Sleep Timer',
        source: 'Source Code',
        todo: 'Todo List',
      },
    },
    pomodoro: {
      break: 'Break',
      changeTimes: 'Change Times',
      completed: 'completed',
      longBreak: 'Long Break',
      pause: 'Pause',
      pomodoro: 'Pomodoro',
      restart: 'Restart',
      start: 'Start',
      title: 'Pomodoro Timer',
    },
    breathing: {
      boxBreathing: 'Box Breathing',
      exhale: 'Exhale',
      fourSevenEight: '4-7-8 Breathing',
      inhale: 'Inhale',
      resonant: 'Resonant Breathing',
      title: 'Breathing Exercise',
    },
    binaural: {
      baseFrequency: 'Base Frequency (Hz)',
      beatFrequency: 'Beat Frequency (Hz)',
      description: 'Binaural beat generator.',
      presets: 'Presets',
      title: 'Binaural Beat',
      presetLabels: {
        alpha: 'Alpha (Relaxation) 10 Hz',
        beta: 'Beta (Focus) 20 Hz',
        delta: 'Delta (Deep Sleep) 2 Hz',
        gamma: 'Gamma (Cognition) 40 Hz',
        theta: 'Theta (Meditation) 5 Hz',
      },
    },
    isochronic: {
      baseFrequency: 'Base Frequency (Hz)',
      description: 'Isochronic tone generator.',
      presets: 'Presets',
      title: 'Isochronic Tone',
      toneFrequency: 'Tone Frequency (Hz)',
      presetLabels: {
        alpha: 'Alpha (Relaxation) 10 Hz',
        beta: 'Beta (Focus) 20 Hz',
        delta: 'Delta (Deep Sleep) 2 Hz',
        gamma: 'Gamma (Cognition) 40 Hz',
        theta: 'Theta (Meditation) 5 Hz',
      },
    },
    lofi: {
      notice:
        'This feature plays music using embedded YouTube videos. By continuing, you agree to connect to YouTube, which may collect data in accordance with their privacy policy. We do not control or track this data.',
      title: 'Lofi Music Player',
      videos: {
        darkAmbient: 'dark ambient radio',
        lofiHipHop: 'lofi hip hop radio',
        peacefulPiano: 'peaceful piano radio',
        sadLofi: 'sad lofi radio',
        synthwave: 'synthwave radio',
      },
    },
  },
  zh: {
    common: {
      cancel: '取消',
      continue: '继续',
      custom: '自定义',
      hold: '屏息',
      start: '开始',
      stop: '停止',
      volume: '音量',
    },
    menu: {
      ariaLabel: '菜单',
      globalVolume: '全局音量',
      language: '语言',
      languageEnglish: 'English',
      languageChinese: '中文',
      items: {
        binaural: '双耳节拍',
        breathing: '呼吸练习',
        countdown: '倒计时',
        donate: '请我喝咖啡',
        lofi: 'Lofi 音乐播放器',
        notepad: '记事本',
        pomodoro: '番茄钟',
        presets: '我的预设',
        share: '分享声音',
        shortcuts: '快捷键',
        sleepTimer: '睡眠计时器',
        source: '源码',
        todo: '待办清单',
        shuffle: '随机播放',
        isochronic: '等时音',
      },
    },
    pomodoro: {
      break: '短休息',
      changeTimes: '修改时长',
      completed: '已完成',
      longBreak: '长休息',
      pause: '暂停',
      pomodoro: '专注',
      restart: '重置',
      start: '开始',
      title: '番茄钟',
    },
    breathing: {
      boxBreathing: '方块呼吸',
      exhale: '呼气',
      fourSevenEight: '4-7-8 呼吸',
      inhale: '吸气',
      resonant: '共振呼吸',
      title: '呼吸练习',
    },
    binaural: {
      baseFrequency: '基础频率 (Hz)',
      beatFrequency: '节拍频率 (Hz)',
      description: '双耳节拍发生器。',
      presets: '预设',
      title: '双耳节拍',
      presetLabels: {
        alpha: 'Alpha（放松）10 Hz',
        beta: 'Beta（专注）20 Hz',
        delta: 'Delta（深睡）2 Hz',
        gamma: 'Gamma（认知）40 Hz',
        theta: 'Theta（冥想）5 Hz',
      },
    },
    isochronic: {
      baseFrequency: '基础频率 (Hz)',
      description: '等时音发生器。',
      presets: '预设',
      title: '等时音',
      toneFrequency: '音调频率 (Hz)',
      presetLabels: {
        alpha: 'Alpha（放松）10 Hz',
        beta: 'Beta（专注）20 Hz',
        delta: 'Delta（深睡）2 Hz',
        gamma: 'Gamma（认知）40 Hz',
        theta: 'Theta（冥想）5 Hz',
      },
    },
    lofi: {
      notice:
        '该功能通过嵌入 YouTube 视频播放音乐。继续使用即表示你同意连接到 YouTube，YouTube 可能会根据其隐私政策收集相关数据。我们不会控制或追踪这些数据。',
      title: 'Lofi 音乐播放器',
      videos: {
        darkAmbient: '暗色氛围电台',
        lofiHipHop: 'Lofi Hip Hop 电台',
        peacefulPiano: '平静钢琴电台',
        sadLofi: '伤感 Lofi 电台',
        synthwave: '合成波电台',
      },
    },
  },
};
