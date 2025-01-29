import {
  Wrapper,
  TestCaseTitle,
  TestCaseBody,
  TestCasePre,
  TestCaseBottom,
  TestCaseAddButton,
  CancleIcon,
  Flex,
} from './TestCaseModal.style';
import {
  useExampleInput,
  useExampleOutput,
  useProblemActions,
} from '@/store/store';

interface TestCaseModalProps {
  onClose: () => void;
  onOpen: () => void;
}

function TestCaseModal({ onClose, onOpen }: TestCaseModalProps) {
  const exampleInput = useExampleInput();
  const exampleOutput = useExampleOutput();
  const { updateExampleInput, updateExampleOutput } = useProblemActions();

  const exampleLengthArr = Array.from(
    { length: exampleInput.length },
    (_, i) => `예제 ${i + 1}`,
  );

  const handleDeleteCase = (removeIdx: number) => {
    const newInput = exampleInput.filter((_, index) => index !== removeIdx);
    const newOutput = exampleOutput.filter((_, index) => index !== removeIdx);

    updateExampleInput(newInput);
    updateExampleOutput(newOutput);
  };

  const exmapleContents = exampleLengthArr.map((elem, idx) => {
    return (
      <div key={elem}>
        <h6>
          <Flex>
            예제 입력 {idx + 1}{' '}
            <CancleIcon
              src="cancle-circle-svgrepo-com.svg"
              onClick={() => handleDeleteCase(idx)}
            />
          </Flex>
        </h6>
        <TestCasePre>{exampleInput[idx]}</TestCasePre>
        <h6>예제 출력 {idx + 1}</h6>
        <TestCasePre>{exampleOutput[idx]}</TestCasePre>
      </div>
    );
  });

  return (
    <Wrapper>
      <TestCaseTitle>테스트 케이스 추가</TestCaseTitle>
      <TestCaseBody>{exmapleContents}</TestCaseBody>
      <TestCaseBottom>
        <TestCaseAddButton onClick={onOpen}>추가하기</TestCaseAddButton>
        <TestCaseAddButton onClick={onClose}>완료</TestCaseAddButton>
      </TestCaseBottom>
    </Wrapper>
  );
}

export default TestCaseModal;
