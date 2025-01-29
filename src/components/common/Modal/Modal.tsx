import { ReactNode } from 'react';
import { Overlay, Wrapper } from './Modal.styles';
import { createPortal } from 'react-dom';

interface ModalProps {
  open: boolean;
  children: ReactNode;
  onClose: () => void;
}

function Modal({ open, children, onClose }: ModalProps) {
  if (!open) return null;

  const portal = document.getElementById('portal');
  if (portal === null) return null;

  return createPortal(
    <>
      <Overlay onClick={onClose} />
      <Wrapper>{children}</Wrapper>
    </>,
    portal,
  );
}

export default Modal;
