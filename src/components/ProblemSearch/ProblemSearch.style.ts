import styled from '@emotion/styled';

export const ProblemNumberInput = styled('input')`
  padding: 0px 1.5rem 0px 1.0625rem;
  width: 15rem;
  height: 1.7rem;
  appearance: none;
  caret-color: white;

  border: 1px solid #404040;
  border-radius: 4px;
  background: #363636;
  color: #e0e0e0;

  &:hover,
  &:focus-within {
    outline: none;
    border: 0.05rem solid white;
    box-shadow: white 0px 0;
  }
`;

export const ProblemSearchButton = styled('button')`
  position: absolute;
  right: 0;
  top: 2px;
  width: 24px;
  height: 24px;
  background-color: transparent;
  cursor: pointer;
`;

export const Wrapper = styled('div')`
  position: relative;
`;
