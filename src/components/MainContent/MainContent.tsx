import ProblemContainer from '@/components/ProblemContainer';
import SolutionContainer from '@/components/SolutionContainer';
import { Wrapper } from './MainContent.styles';
import { useProblemNumber } from '@/store/store';
import HorizonResizingBox from '../common/ResizingBox/HorizonResizingBox';

function MainContent() {
  const problemNumber = useProblemNumber();

  return (
    <Wrapper>
      <HorizonResizingBox initialLeftRatio={0.4}>
        <ProblemContainer key={problemNumber} problemNumber={problemNumber} />
        <SolutionContainer problemNumber={problemNumber} />
      </HorizonResizingBox>
    </Wrapper>
  );
}

export default MainContent;
