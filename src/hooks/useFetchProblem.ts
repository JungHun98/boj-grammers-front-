import { useState, useEffect } from 'react';
import { requestProblem } from '@/apis/problemApi';

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

function useFetchProblem(pId: number): {
  data: ProblemContent | null;
  error: Error | null;
} {
  const [data, setData] = useState<ProblemContent | null>(null);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await requestProblem(pId);
        setData(response.data);
      } catch (err) {
        const error = err as Error;
        setError(error);
      }
    }

    fetchData();
  }, [pId]);

  return { data, error };
}

export default useFetchProblem;
