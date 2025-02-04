import { create } from 'zustand';
import { defaultCode } from '@/utils/consts';

export type Language = keyof typeof defaultCode;

type State = {
  language: Language;
  isRunning: boolean;
};

type Action = {
  updateLanguage: (language: State['language']) => void;
  updateIsRunning: (runState: boolean) => void;
};

const useCodeStore = create<State & Action>((set) => ({
  language: 'java',
  code: defaultCode,
  isRunning: false,
  updateLanguage: (language) => set(() => ({ language })),
  updateIsRunning: (isRunning) => set(() => ({ isRunning })),
}));

export const useLanguage = () => useCodeStore((state) => state.language);

export const useIsRunning = () => useCodeStore((state) => state.isRunning);

export const useUpdateLanguage = () =>
  useCodeStore((state) => state.updateLanguage);

export const useUpdateIsRunning = () =>
  useCodeStore((state) => state.updateIsRunning);
