import Loder from '@/components/Loder';
import { Fail, Success, Table, TablePre } from './ResultTable.styles';

interface ResultTableProps {
  input: string;
  output: string;
  result: string | null;
}

function ResultTable({ input, output, result }: ResultTableProps) {
  const compareResult = () => {
    const outputArr = output.split('\n');
    const resultArr = result!.split('\n');

    return outputArr.every(
      (str, index) => str.trim() === resultArr[index].trim(),
    );
  };

  return (
    <Table>
      <tbody>
        <tr>
          <th>입력값</th>
          <td style={{ whiteSpace: 'pre-line' }}>
            <TablePre>{input}</TablePre>
          </td>
        </tr>
        <tr>
          <th>기댓값</th>
          <td style={{ whiteSpace: 'pre-line' }}>
            <TablePre>{output}</TablePre>
          </td>
        </tr>
        <tr>
          <th>실행 결과</th>
          {result === null ? (
            <td style={{ padding: 0 }}>
              <Loder />
            </td>
          ) : (
            <td style={{ whiteSpace: 'pre-line' }}>
              {compareResult() ? (
                <Success>테스트를 통과했습니다.</Success>
              ) : (
                <Fail>{result}</Fail>
              )}
            </td>
          )}
        </tr>
      </tbody>
    </Table>
  );
}

export default ResultTable;
