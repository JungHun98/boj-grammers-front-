import { FormEventHandler, useRef } from 'react';
import {
  ProblemNumberInput,
  ProblemSearchButton,
  Wrapper,
} from './ProblemSearch.style';
import { useProblemActions } from '@/store/store';

function ProblemSearch() {
  const inputRef = useRef<HTMLInputElement>(null);
  const { updateProblemNumber } = useProblemActions();

  const placeholderText = '백준 문제 번호를 입력해주세요.';

  const handleSearch = () => {
    if (inputRef.current === null) return;

    const inputValue = inputRef.current.value;

    if (isNaN(+inputValue) || inputValue.trim().length === 0) {
      alert('문제 번호에 숫자를를 입력해주세요.');
      return;
    }

    updateProblemNumber(+inputValue);
  };

  const handleSubmitSearch: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    handleSearch();
  };

  return (
    <Wrapper>
      <form onSubmit={handleSubmitSearch}>
        <ProblemNumberInput placeholder={placeholderText} ref={inputRef} />
        <ProblemSearchButton type="submit">
          <img src="/search.svg" alt="검색" width={24} />
        </ProblemSearchButton>
      </form>
    </Wrapper>
  );
}

export default ProblemSearch;
