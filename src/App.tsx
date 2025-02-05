import './Main.css';
import { Analytics } from '@vercel/analytics/react';
import { useEffect, useState } from 'react';
import Problem from './routes/problem';
import Modal from '@/components/common/Modal';
import TestCaseModal from '@/components/TestCaseModal';
import AdditionalModal from '@/components/common/AdditionalModal';
import AdditionalTestCaseModal from '@/components/AdditionalTestCaseModal';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [isAdditionalOpen, setAdditionalOpen] = useState(false);

  useEffect(() => {
    const handleBeforeUnload = (event: BeforeUnloadEvent) => {
      event.preventDefault();
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

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
      <Analytics />
    </>
  );
}

export default App;
