import { Button } from '@/components/common/Button';
import useSocket from '@/hooks/useSocket';
import { useLanguage, useCode } from '@/store/codeStroe';
import { useExampleInput } from '@/store/store';
import { css } from '@emotion/css';

const style = css`
  background-color: #2d5a27;
  color: white;

  &: hover {
    background-color: #224a1d;
  }
`;

function CodeRunButton() {
  const socket = useSocket(import.meta.env.VITE_APP_URL);

  const lang = useLanguage();
  const code = useCode();
  const input = useExampleInput();

  const handleClickButton = () => {
    socket.emit('codeRun', { code, lang, input });
  };

  return (
    <Button onClick={handleClickButton} className={style}>
      코드 실행
    </Button>
  );
}

export default CodeRunButton;
