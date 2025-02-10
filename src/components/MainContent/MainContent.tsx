import ProblemContainer from '@/components/ProblemContainer';
import SolutionContainer from '@/components/SolutionContainer';
import { Wrapper } from './MainContent.styles';
import { useProblemNumber } from '@/store/store';
import HorizonResizingBox from '@/components/common/ResizingBox/HorizonResizingBox';
import ErrorBoundary from '@/components/common/ErrorBoundary/ErrorBoundary';

function MainContent() {
  const problemNumber = useProblemNumber();

  return (
    <>
      <Wrapper>
        <HorizonResizingBox initialLeftRatio={0.4}>
          <ErrorBoundary key={problemNumber}>
            <ProblemContainer problemNumber={problemNumber} />
          </ErrorBoundary>
          <SolutionContainer problemNumber={problemNumber} />
        </HorizonResizingBox>
      </Wrapper>
    </>
  );
}

export default MainContent;
