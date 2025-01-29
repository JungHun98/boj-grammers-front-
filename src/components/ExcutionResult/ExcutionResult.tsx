import { useEffect, useState } from 'react';
import { ErrorPre, Wrapper } from './ExcutionResult.styles';
import useSocket from '@/hooks/useSocket';
import { useExampleInput, useExampleOutput } from '@/store/store';
import ResultTable from '@/components/ResultTable';

interface ExcutionResultProps {
  height: number;
}

interface ResultInfo {
  input: string;
  output: string;
  result: string | null;
}

function ExcutionResult({ height }: ExcutionResultProps) {
  const socket = useSocket(import.meta.env.VITE_APP_URL);
  const [error, setError] = useState<string | null>(null);
  const [excuteResult, setExcuteResult] = useState<string | null[]>([]);

  const exampleInput = useExampleInput();
  const exampleOutput = useExampleOutput();

  const makeRsultTable = () => {
    const resultArray: ResultInfo[] = Array(excuteResult.length);

    for (let i = 0; i < excuteResult.length; i++) {
      const input = exampleInput[i];
      const output = exampleOutput[i];
      const result = excuteResult[i] === null ? null : excuteResult[i];

      resultArray[i] = { input, output, result };
    }

    return resultArray.map((info, index) => (
      <ResultTable key={index} {...info} />
    ));
  };

  useEffect(() => {
    if (socket !== null) {
      socket.on('start', (data) => {
        setError(null);
        setExcuteResult(data);
      });

      socket.on('output', (data) => {
        setError(null);
        setExcuteResult(data);
      });

      socket.on('error', (data) => {
        const result = data.split('\n').slice(1).join('\n');
        setError(result);
      });
    }
  }, [socket]);

  return (
    <Wrapper style={{ height: `calc(${100 - height}% - 15px)` }}>
      {error === null && excuteResult.length === 0 ? (
        <h3>여기에 실행 결과가 표시됩니다.</h3>
      ) : error !== null ? (
        <ErrorPre>{error}</ErrorPre>
      ) : (
        makeRsultTable()
      )}
    </Wrapper>
  );
}

export default ExcutionResult;
