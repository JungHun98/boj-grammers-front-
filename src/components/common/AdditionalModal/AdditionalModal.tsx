import { ReactNode } from 'react';
import { Overlay, Wrapper } from './AdditionalModal.styles';
import { createPortal } from 'react-dom';

interface AdditionalModalProps {
  open: boolean;
  children: ReactNode;
  onClose: () => void;
}

function AdditionalModal({ open, children, onClose }: AdditionalModalProps) {
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

export default AdditionalModal;
