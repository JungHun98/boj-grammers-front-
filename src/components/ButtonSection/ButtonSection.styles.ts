import { css } from '@emotion/css';
import styled from '@emotion/styled';

export const Wrapper = styled('div')`
  width: 100%;
  height: 3.5625rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 20px;
  box-sizing: border-box;
  border-top: 1px solid #414547;
  background-color: #1e1e1e;
`;

export const seconderyStyle = css`
  background-color: #2d2d2d;
  color: #e0e0e0;
  border: 1px solid #404040;

  &: hover {
    background-color: #383838;
  }
`;

export const primaryStyle = css`
  background-color: #2b5b84;
  color: white;

  &:hover {
    background-color: #1e4a73;
  }
`;

export const ButtonContainer = styled('div')`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;
