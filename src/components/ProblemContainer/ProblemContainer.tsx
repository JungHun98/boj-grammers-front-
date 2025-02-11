import { useEffect } from 'react';
import Example from '@/components/Example';
import ProblemSection from '@/components/ProblemSection';
import { ProblemH6, Wrapper } from './ProblemContainer.style';
import { useProblemActions } from '@/store/store';
import useRequest from '@/hooks/useRequest';
import { requestProblem } from '@/apis/problemApi';

interface ProblemContainerProps {
  problemNumber: number;
}

interface ExampleInputOutput {
  explain: string;
  input: string;
  number: number;
  output: string;
}

interface ProblemContent {
  title: string;
  descriptionHtml: string;
  limitTableHtml: string;
  inputHtml: string;
  outputHtml: string;
  limitHtml: string;
  examples: ExampleInputOutput[];
}

function ProblemContainer({ problemNumber }: ProblemContainerProps) {
  const { updateExampleInput, updateExampleOutput } = useProblemActions();

  const data = useRequest<number, ProblemContent>(
    requestProblem,
    problemNumber,
  );

  useEffect(() => {
    if (data?.examples?.length !== undefined) {
      const exampleInput = data.examples.map(({ input }) => input);
      const exampleOutput = data.examples.map(({ output }) => output);

      updateExampleInput(exampleInput);
      updateExampleOutput(exampleOutput);
    }
  }, [data]);

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    if (typeof window?.MathJax !== 'undefined') {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      if (typeof window.MathJax.typeset === 'function') {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        window.MathJax.typeset();
      }
    }
  }, []);

  if (data === undefined) return null;

  return (
    <Wrapper>
      <div>
        <h3>{data?.title}</h3>
      </div>
      <ProblemSection title="" html={data.limitTableHtml} />
      <ProblemSection title="문제설명" html={data.descriptionHtml} />
      <ProblemSection title="입력" html={data.inputHtml} />
      <ProblemSection title="출력" html={data.outputHtml} />
      {data.limitHtml !== null ? (
        <ProblemSection title="제한" html={data.limitHtml} />
      ) : null}
      {data.examples !== null
        ? data.examples.map(({ input, number, output }) => {
            return (
              <div key={number}>
                <ProblemH6>예제 입력 {number}</ProblemH6>
                <Example content={input} />
                <ProblemH6>예제 출력 {number}</ProblemH6>
                <Example content={output} />
              </div>
            );
          })
        : null}
    </Wrapper>
  );
}

export default ProblemContainer;
