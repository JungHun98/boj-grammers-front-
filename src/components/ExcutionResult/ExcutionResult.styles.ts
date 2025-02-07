import styled from '@emotion/styled';

export const Wrapper = styled('div')`
  width: 100%;
  padding: 20px 20px;
  box-sizing: border-box;
  background-color: #1e1e1e;

  & h3 {
    color: #e2e2e2;
    font-size: 16px;
    margin-bottom: 10px;
  }
`;

export const ErrorPre = styled('pre')`
  font-family: Menlo, Monaco, 'Source Code Pro', consolas, monospace;
  line-height: 1.8;
  margin: 0;
  padding: 0;
  color: red;
  font-size: 14px;
  font-weight: 600;
  background-color: transparent;
`;

export const NetworkConment = styled('div')`
  display: flex;
  align-items: center;
  gap: 8px;

  font-size: 0.9rem;
  font-weight: bold;
  color: #8b949e;
`;
