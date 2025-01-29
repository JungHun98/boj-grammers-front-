import styled from '@emotion/styled';

export const Wrapper = styled('div')<{ height: number }>`
  position: relative;
  width: 100%;
  height: ${(props) => props.height}%;
  border-left: 1px solid #414547;
  background-color: #1e1e1e;
  overflow: auto;

  & .cm-editor * {
    font-family: Menlo, Monaco, 'Source Code Pro', consolas, monospace;
    font-size: 18px;
  }

  & .cm-theme * {
    background-color: transparent;
  }
`;
