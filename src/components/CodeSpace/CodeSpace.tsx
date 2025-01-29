import CodeMirror from '@uiw/react-codemirror';
import { copilot } from '@uiw/codemirror-theme-copilot';
import { loadLanguage } from '@uiw/codemirror-extensions-langs';
import { Wrapper } from './CodeSpace.style';
import { useLanguage, useCode, useUpdateCode } from '@/store/codeStroe';
import CopyBlock from '@/components/CopyBlock';

interface CodeSpaceProps {
  height: number;
}

function CodeSpace({ height }: CodeSpaceProps) {
  const lang = useLanguage();
  const codeSet = useCode();
  const updateCode = useUpdateCode();

  const handleInputCode = (value: string) => {
    updateCode(lang, value);
  };

  return (
    <Wrapper height={height}>
      <CopyBlock code={codeSet} />
      <CodeMirror
        value={codeSet}
        onChange={handleInputCode}
        theme={copilot}
        height="100%"
        extensions={[loadLanguage(lang)!]}
      />
    </Wrapper>
  );
}

export default CodeSpace;
