import { DragEventHandler, useState } from 'react';
import { Gutter, RunSection, Wrapper } from './SolutionContainer.styles';
import CodeSpace from '@/components/CodeSpace';
import ExcutionResult from '@/components/ExcutionResult';

interface SolutionContainerProps {
  width: number;
  problemNumber: number;
}

function SolutionContainer({ width, problemNumber }: SolutionContainerProps) {
  const [upHeigth, setUpHeigth] = useState(60);

  const handleVirticalDrag: DragEventHandler = (e) => {
    const newUpHegith = (e.clientY / window.innerHeight) * 100;
    if (newUpHegith > 5 && newUpHegith < 95) {
      // 최소, 최대 너비 설정
      setUpHeigth(newUpHegith);
    }
  };

  return (
    <Wrapper style={{ width: `${100 - width}%` }}>
      <RunSection>
        <CodeSpace height={upHeigth} />
        <Gutter draggable="true" onDrag={handleVirticalDrag}></Gutter>
        <ExcutionResult key={problemNumber} height={upHeigth} />
      </RunSection>
    </Wrapper>
  );
}

export default SolutionContainer;
