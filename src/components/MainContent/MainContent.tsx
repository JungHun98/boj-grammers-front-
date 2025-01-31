import ProblemContainer from '@/components/ProblemContainer';
import SolutionContainer from '@/components/SolutionContainer';
import { Wrapper } from './MainContent.styles';
import { useProblemNumber } from '@/store/store';
import HorizonResizingBox from '@/components/common/ResizingBox/HorizonResizingBox';
// import { Mobile, PC } from '@/components/common/MediaQurey/MediaQurey';

function MainContent() {
  const problemNumber = useProblemNumber();

  return (
    <>
      {/* <PC> */}
      <Wrapper>
        <HorizonResizingBox initialLeftRatio={0.4}>
          <ProblemContainer key={problemNumber} problemNumber={problemNumber} />
          <SolutionContainer problemNumber={problemNumber} />
        </HorizonResizingBox>
      </Wrapper>
      {/* </PC> */}
      {/* <Mobile>
        <Wrapper>
          <ProblemContainer key={problemNumber} problemNumber={problemNumber} />
          <SolutionContainer problemNumber={problemNumber} />
        </Wrapper>
      </Mobile> */}
    </>
  );
}

export default MainContent;
