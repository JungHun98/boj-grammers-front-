import styled from '@emotion/styled';

export const Wrapper = styled('div')`
  position: relative;
  min-width: 34rem;
  padding: 2rem;
  border: solid 1px #d7e2eb;
  background-color: white;
  z-index: 1;
`;

export const TestCaseArea = styled('textarea')`
  width: 100%;
  height: 10rem;
  outline-color: #5c76d1;
  border: 1px solid #d5d5d5;
  border-radius: 10px;
  padding: 0.5rem 1rem;
  resize: none;
  font-size: 1rem;
`;

export const Bottom = styled('div')`
  display: flex;
  justify-content: flex-end;
  padding: 2.5rem 0 0 2.5rem;
  text-align: right;
  width: 100%;
  overflow: auto;
  gap: 1rem;
`;

export const AddButton = styled('button')`
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

export const CancleButton = styled('button')`
  padding: 0.4375rem 0.8125rem;
  font-size: 1rem;
  line-height: 1.5rem;
  background-color: white;
  cursor: pointer;
  border: 1px solid red;
  border-radius: 0.25rem;

  &: hover {
    color: white;
    background-color: red;
  }
`;
