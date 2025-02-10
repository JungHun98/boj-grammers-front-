import { useEffect } from 'react';
import useFetchProblem from '@/hooks/useFetchProblem';
import Example from '@/components/Example';
import ProblemSection from '@/components/ProblemSection';
import Spinner from '@/components/Spinner';
import { ProblemH6, Wrapper } from './ProblemContainer.style';
import { useProblemActions } from '@/store/store';
import { AxiosError } from 'axios';

interface ProblemContainerProps {
  problemNumber: number;
}

function ProblemContainer({ problemNumber }: ProblemContainerProps) {
  const { updateExampleInput, updateExampleOutput } = useProblemActions();
  const { data, error } = useFetchProblem(problemNumber);

  useEffect(() => {
    if (data?.examples?.length !== undefined) {
      const exampleInput = data.examples.map(({ input }) => input);
      const exampleOutput = data.examples.map(({ output }) => output);

      updateExampleInput(exampleInput);
      updateExampleOutput(exampleOutput);
    }
  }, [data]);

  if (error) {
    throw error as AxiosError;
  }

  return (
    <Wrapper>
      {data === null ? (
        <Spinner />
      ) : (
        <>
          <div>
            <h3>{data.title}</h3>
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
        </>
      )}
    </Wrapper>
  );
}

export default ProblemContainer;
