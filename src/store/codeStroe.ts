import { create } from 'zustand';
import { defaultCode } from '@/utils/consts';

export type Language = keyof typeof defaultCode;

type codeSet = {
  [key in Language]: string;
};

type State = {
  language: Language;
  code: codeSet;
};

type Action = {
  updateLanguage: (language: State['language']) => void;
  updateCode: (language: keyof codeSet, newCode: string) => void;
};

const useCodeStore = create<State & Action>((set) => ({
  language: 'java',
  code: defaultCode,
  updateLanguage: (language) => set(() => ({ language })),
  updateCode: (language, newCode) =>
    set((state) => ({
      code: {
        ...state.code,
        [language]: newCode,
      },
    })),
}));

export const useLanguage = () => useCodeStore((state) => state.language);

export const useCode = () =>
  useCodeStore((state) => state.code[state.language]);

export const useUpdateLanguage = () =>
  useCodeStore((state) => state.updateLanguage);

export const useUpdateCode = () => useCodeStore((state) => state.updateCode);
