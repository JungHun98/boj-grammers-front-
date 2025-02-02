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

const containsDangerousCode = (inputString: string) => {
  // 위험한 패턴 목록
  const forbiddenPatterns = [
    /eval\(/i, // eval() 호출
    /exec\(/i, // exec() 호출
    /os\.system\(/i, // os.system() 호출
    /child_process/i, // child_process 모듈
    /rm\s+-rf/i, // rm -rf 명령어
    /process\.exec/i, // process.exec() 호출
  ];

  // 패턴 검사
  for (const pattern of forbiddenPatterns) {
    if (pattern.test(inputString)) {
      return true; // 위험한 코드가 발견됨
    }
  }

  return false; // 안전한 코드
};

function CodeRunButton() {
  const socket = useSocket(import.meta.env.VITE_APP_URL);

  const lang = useLanguage();
  const code = useCode();
  const input = useExampleInput();

  const handleClickButton = () => {
    if (containsDangerousCode(code)) {
      alert('위험한 코드가 작성되어 있어요.');
      return;
    }
    socket.emit('codeRun', { code, lang, input });
  };

  return (
    <Button onClick={handleClickButton} className={style}>
      코드 실행
    </Button>
  );
}

export default CodeRunButton;
