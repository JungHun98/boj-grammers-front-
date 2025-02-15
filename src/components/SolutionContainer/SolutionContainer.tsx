import { Wrapper } from './SolutionContainer.styles';
import CodeSpace from '@/components/CodeSpace';
import ExcutionResult from '@/components/ExcutionResult';
import VirticalResizingBox from '../common/ResizingBox/VirticalResizingBox';

interface SolutionContainerProps {
  problemNumber: number;
}

function SolutionContainer({ problemNumber }: SolutionContainerProps) {
  return (
    <Wrapper>
      <VirticalResizingBox initialTopRatio={0.6}>
        <CodeSpace />
        <ExcutionResult key={`result_${problemNumber}`} />
      </VirticalResizingBox>
    </Wrapper>
  );
}

export default SolutionContainer;
