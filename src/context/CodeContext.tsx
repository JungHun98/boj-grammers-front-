import { createContext, ReactNode, useContext } from 'react';
import { defaultCode } from '@/utils/consts';

const CodeContext = createContext(defaultCode);

export type Langauge = keyof typeof defaultCode;

export function CodeProvider({ children }: { children: ReactNode }) {
  const code = defaultCode;

  return <CodeContext.Provider value={code}>{children}</CodeContext.Provider>;
}

export const useCode = () => {
  return useContext(CodeContext);
};
