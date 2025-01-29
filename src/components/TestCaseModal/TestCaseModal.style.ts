import styled from '@emotion/styled';

export const Wrapper = styled('div')`
  position: relative;
  min-width: 40rem;
  padding: 2rem;
  border: solid 1px #d7e2eb;
  background-color: white;
`;

export const TestCaseTitle = styled('h3')`
  margin-top: 0;
  color: #263747;
  font-size: 26px;
  font-weight: 700;
`;

export const TestCaseBody = styled('div')`
  width: 100%;
  height: 30rem;
  padding: 1rem;
  overflow: auto;
  border: solid 1px #d7e2eb;
`;

export const TestCaseBottom = styled('div')`
  display: flex;
  justify-content: flex-end;
  padding: 2.5rem 0 0 2.5rem;
  text-align: right;
  width: 100%;
  overflow: auto;
  gap: 1rem;
`;

export const TestCaseAddButton = styled('button')`
  padding: 0.4375rem 0.8125rem;
  color: white;
  font-size: 1rem;
  line-height: 1.5rem;
  background-color: #0077ff;
  cursor: pointer;
  border-radius: 0.25rem;

  &: hover {
    background-color: #0053f4;
  }
`;

export const TestCasePre = styled('pre')`
  background: #e9ebf2;
  padding: 10px;
  font-size: 14px;
  font-weight: 600;
  line-height: 130%;
`;

export const Flex = styled('div')`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CancleIcon = styled('img')`
  width: 20px;
  height: 20px;
  cursor: pointer;

  &:hover {
    filter: invert(19%) sepia(91%) saturate(7462%) hue-rotate(1deg)
      brightness(95%) contrast(120%);
  }
`;
