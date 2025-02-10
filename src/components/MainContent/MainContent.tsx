import ProblemContainer from '@/components/ProblemContainer';
import SolutionContainer from '@/components/SolutionContainer';
import { Wrapper } from './MainContent.styles';
import { useProblemNumber } from '@/store/store';
import HorizonResizingBox from '@/components/common/ResizingBox/HorizonResizingBox';
import ErrorBoundary from '@/components/common/ErrorBoundary/ErrorBoundary';
import { Suspense } from 'react';
import Spinner from '@/components/Spinner';

function MainContent() {
  const problemNumber = useProblemNumber();

  return (
    <>
      <Wrapper>
        <HorizonResizingBox initialLeftRatio={0.4}>
          <ErrorBoundary key={problemNumber}>
            <Suspense fallback={<Spinner />}>
              <ProblemContainer problemNumber={problemNumber} />
            </Suspense>
          </ErrorBoundary>
          <SolutionContainer problemNumber={problemNumber} />
        </HorizonResizingBox>
      </Wrapper>
    </>
  );
}

export default MainContent;
