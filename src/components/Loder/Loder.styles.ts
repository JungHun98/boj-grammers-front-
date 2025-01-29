import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';

export const Wrapper = styled('div')`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 45px;
  height: 31px;
`;

const bounce = keyframes`
from{
  transform: translateY(0);
}
to{
  transform: translateY(3px);
}
`;

export const Circle = styled('div')`
  width: 5px;
  height: 5px;
  background-color: #fff;
  border-radius: 50%;
  margin: 3px;
  animation: ${bounce} 0.5s ease-in infinite;
  animation-direction: alternate;

  &:nth-of-type(2) {
    animation-delay: 0.1s;
  }
  &:nth-of-type(3) {
    animation-delay: 0.2s;
  }
`;
