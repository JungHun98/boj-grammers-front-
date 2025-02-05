import styled from '@emotion/styled';

export const Wrapper = styled('div')`
  position: fixed;
  left: 50%;
  top: 5rem;
  bottom: unset;
  transform: translate(-50%, -100%);
  z-index: 99999;
  visibility: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  visibility: 'hidden';
  background-color: #193549;
  border: 1px solid #234e6d;
  border-radius: 6px;
  padding: 12px 16px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  transition: 0.5s ease;
  opacity: 0;

  &.snackbar-opened {
    visibility: visible;
    opacity: 1;
    transform: translate(-50%, 0);
  }
`;

export const Content = styled('div')`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const SnackbarIcon = styled('div')`
  font-size: 15px;
`;

export const Message = styled('div')`
  color: #e6f0f6;
  font-size: 14px;
  margin-right: 12px;
`;
