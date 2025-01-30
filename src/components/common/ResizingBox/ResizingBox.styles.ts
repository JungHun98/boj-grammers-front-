import styled from '@emotion/styled';
import { css } from '@emotion/css';

export const horizontalContainer = css`
  display: flex;
  width: 100%;
  height: 100%;
`;

export const verticalContainer = css`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

export const firstElementHorizontal = css`
  width: 50%;
  min-width: 10rem;
`;

export const firstElementVertical = css`
  height: 50%;
  min-height: 5rem;
`;

export const secondElementHorizontal = css`
  flex: 1;
  width: 50%;
  min-width: 10rem;
`;

export const secondElementVertical = css`
  flex: 1;
  height: 50%;
  min-height: 5rem;
  overflow: auto;
`;

export const handlerHorizontal = css`
  cursor: ew-resize;
  border-width: 0 1px 0 1px;
  width: 16px;
  height: 100%;
  border-right: 1px solid #414547;
`;

export const handlerVertical = css`
  flex-grow: 0;
  cursor: ns-resize;
  width: 100%;
  height: 16px;
  border-top: 1px solid #414547;
  border-bottom: 1px solid #414547;
`;

export const HandlerWrapper = styled('div')`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const HorizonGutter = styled('div')`
  width: 14px;
  height: 36px;
  background-image: url('/gutter.png');
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
`;

export const VerticalGutter = styled('div')`
  width: 36px;
  height: 14px;
  background-image: url('/gutter_ver.png');
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
`;
