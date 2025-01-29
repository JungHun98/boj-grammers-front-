import { DragEventHandler, useState } from 'react';
import ProblemContainer from '@/components/ProblemContainer';
import SolutionContainer from '@/components/SolutionContainer';
import { Gutter, Wrapper } from './MainContent.styles';
import { useProblemNumber } from '@/store/store';

function MainContent() {
  const [leftWidth, setLeftWidth] = useState(40);
  const problemNumber = useProblemNumber();

  const handleDrag: DragEventHandler = (e) => {
    const newLeftWidth = (e.clientX / window.innerWidth) * 100;
    if (newLeftWidth > 5 && newLeftWidth < 95) {
      // 최소, 최대 너비 설정
      setLeftWidth(newLeftWidth);
    }
  };

  return (
    <Wrapper>
      <ProblemContainer
        key={problemNumber}
        width={leftWidth}
        problemNumber={problemNumber}
      />
      <Gutter draggable="true" onDrag={handleDrag} />
      <SolutionContainer width={leftWidth} problemNumber={problemNumber} />
    </Wrapper>
  );
}

export default MainContent;
