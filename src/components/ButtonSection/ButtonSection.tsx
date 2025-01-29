import { Button } from '@/components/common/Button';
import CodeRunButton from '@/components/CodeRunButton';
import {
  ButtonContainer,
  Wrapper,
  seconderyStyle,
  primaryStyle,
} from './ButtonSection.styles';
import { useProblemNumber } from '@/store/store';
import { useLanguage } from '@/store/codeStroe';

interface ButtonSectionProps {
  onOpen: () => void;
}

function ButtonSection({ onOpen }: ButtonSectionProps) {
  const problemNumber = useProblemNumber();
  const language = useLanguage();

  const openNewTap = (url: string) => {
    window.open(url);
  };

  const googleSearchURL = `https://www.google.com/search?q=백준+${problemNumber}+${language}`;
  const BojSubmithURL = `https://www.acmicpc.net/submit/${problemNumber}`;
  const questionURL = `https://www.acmicpc.net/board/search/all/problem/${problemNumber}`;

  return (
    <Wrapper>
      <ButtonContainer>
        <Button onClick={onOpen} className={seconderyStyle}>
          테스트 케이스 추가하기
        </Button>
        <Button
          onClick={() => openNewTap(googleSearchURL)}
          className={seconderyStyle}
        >
          문제검색
        </Button>
        <Button
          onClick={() => openNewTap(questionURL)}
          className={seconderyStyle}
        >
          질문 게시판
        </Button>
      </ButtonContainer>
      <ButtonContainer>
        <CodeRunButton />
        <Button
          onClick={() => openNewTap(BojSubmithURL)}
          className={primaryStyle}
        >
          제출하기
        </Button>
      </ButtonContainer>
    </Wrapper>
  );
}

export default ButtonSection;
