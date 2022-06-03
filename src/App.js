import React, { useState } from "react";
import './App.scss';
import Modal from './Modal';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="App">
      <button onClick={() => setIsOpen(true)}>Open Modal</button>
      <Modal position='right' open={isOpen} onClose={() => setIsOpen(false)}>
        Fancy Modal
      </Modal>
    </div>
  );
}

export default App;
