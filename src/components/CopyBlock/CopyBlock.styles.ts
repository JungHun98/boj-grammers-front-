import styled from '@emotion/styled';

export const CopyButton = styled('button')`
  position: absolute;
  top: 1rem;
  right: 1rem;
  padding: 6px 12px;
  background-color: #383838;
  border: 1px solid #4a4a4a;
  border-radius: 4px;
  color: #e0e0e0;
  font-size: 12px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 4px;
  transition: all 0.2s;
  z-index: 2;

  &: hover {
    background-color: #424242;
  }
`;
