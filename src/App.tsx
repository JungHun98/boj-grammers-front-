import './Main.css';
import { Analytics } from '@vercel/analytics/react';
import { useEffect, useState } from 'react';
import Problem from './routes/problem';
import Modal from '@/components/common/Modal';
import TestCaseModal from '@/components/TestCaseModal';
import AdditionalModal from '@/components/common/AdditionalModal';
import AdditionalTestCaseModal from '@/components/AdditionalTestCaseModal';
import Snackbar from './components/common/Snackbar';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [isAdditionalOpen, setAdditionalOpen] = useState(false);

  useEffect(() => {
    const handleBeforeUnload = (event: BeforeUnloadEvent) => {
      event.preventDefault();
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    if (typeof window?.MathJax !== 'undefined') {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      if (typeof window.MathJax.typeset === 'function') {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        window.MathJax.typeset();
      }
    }

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

  const handleModalClose = () => {
    setIsOpen(false);
  };

  const handleModalOpen = () => {
    setIsOpen(true);
  };

  const handleAdditionalModalClose = () => {
    setAdditionalOpen(false);
  };

  const handleAdditionalModalOpen = () => {
    setAdditionalOpen(true);
  };

  return (
    <>
      <Problem onOpen={handleModalOpen} />
      <Modal open={isOpen} onClose={handleModalClose}>
        <TestCaseModal
          onClose={handleModalClose}
          onOpen={handleAdditionalModalOpen}
        />
      </Modal>
      <AdditionalModal
        open={isAdditionalOpen}
        onClose={handleAdditionalModalClose}
      >
        <AdditionalTestCaseModal onClose={handleAdditionalModalClose} />
      </AdditionalModal>
      <Snackbar />
      <Analytics />
    </>
  );
}

export default App;
