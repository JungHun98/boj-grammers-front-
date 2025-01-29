import styled from '@emotion/styled';

export const Wrapper = styled('div')`
  display: flex;
  align-items: center;
  justify-content: right;
  box-sizing: border-box;
  & select {
    cursor: pointer;
    font-size: 15px;
    font-family: 'Pretendard-Regular';
    outline: none;
    padding: 6px 12px;
    border: 1px solid #404040;
    border-radius: 4px;
    background: #363636;
    color: #e0e0e0;
  }
`;
