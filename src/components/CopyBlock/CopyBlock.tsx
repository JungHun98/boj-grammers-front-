import { useState } from 'react';
import { CopyButton } from './CopyBlock.styles';
import { Copy, Check } from 'lucide-react';
import { useCode, Langauge } from '@/context/CodeContext';

interface CopyBlockProps {
  lang: Langauge;
}

function CopyBlock({ lang }: CopyBlockProps) {
  const [isCopied, setIsCopied] = useState(false);
  const code = useCode();

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(code[lang]);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy code:', err);
    }
  };

  return (
    <CopyButton onClick={copyToClipboard} disabled={isCopied}>
      {isCopied ? (
        <>
          <Check size={14} />
          <span>복사됨</span>
        </>
      ) : (
        <>
          <Copy size={14} />
          <span>복사</span>
        </>
      )}
    </CopyButton>
  );
}

export default CopyBlock;
