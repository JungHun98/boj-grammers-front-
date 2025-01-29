import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';

const spin = keyframes`
  100%
  {
    transform: rotate(360deg);
  }
`;

export const Wrapper = styled('div')`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const Circle = styled('div')`
  margin: calc(50% - 25px) auto;
  width: 50px;
  height: 50px;
  border: 3px solid rgba(255, 255, 255, 0.3);
  box-sizing: border-box;
  border-top-color: white;
  border-radius: 100%;
  animation: ${spin} 1s ease-in-out infinite;
`;
