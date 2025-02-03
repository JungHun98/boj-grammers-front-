import { create } from 'zustand';
import { defaultCode } from '@/utils/consts';

export type Language = keyof typeof defaultCode;

type codeSet = {
  [key in Language]: string;
};

type State = {
  language: Language;
  code: codeSet;
  isRunning: boolean;
};

type Action = {
  updateLanguage: (language: State['language']) => void;
  updateCode: (language: keyof codeSet, newCode: string) => void;
  updateIsRunning: (runState: boolean) => void;
};

const useCodeStore = create<State & Action>((set) => ({
  language: 'java',
  code: defaultCode,
  isRunning: false,
  updateLanguage: (language) => set(() => ({ language })),
  updateCode: (language, newCode) =>
    set((state) => ({
      code: {
        ...state.code,
        [language]: newCode,
      },
    })),
  updateIsRunning: (isRunning) => set(() => ({ isRunning })),
}));

export const useLanguage = () => useCodeStore((state) => state.language);

export const useCode = () =>
  useCodeStore((state) => state.code[state.language]);

export const useIsRunning = () => useCodeStore((state) => state.isRunning);

export const useUpdateLanguage = () =>
  useCodeStore((state) => state.updateLanguage);

export const useUpdateCode = () => useCodeStore((state) => state.updateCode);

export const useUpdateIsRunning = () =>
  useCodeStore((state) => state.updateIsRunning);
