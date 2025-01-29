import styled from '@emotion/styled';

export const Wrapper = styled('section')`
  width: 60%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const RunSection = styled('div')`
  height: calc(100vh - (3.5rem + 3.5625rem));
`;

export const Gutter = styled('div')`
  height: 15px;
  background-image: url('/gutter_ver.png');
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  cursor: n-resize;
  background-color: #1e1e1e;
  border: solid 1px #414547;
  border-bottom: none;
`;
