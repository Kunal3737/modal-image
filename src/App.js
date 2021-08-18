import logo from "./logo.svg";
import { useState } from "react";
import "./App.css";
import Modal from "./components/Modal";

function App() {
  const [showModal, setShowModal] = useState(false);

  console.log(showModal);
  return (
    <div className="App">
      <Modal showModal={showModal} setShowModal={setShowModal}>
        <img src={logo} className="App-logo" alt="logo" />
      </Modal>
      <header className="App-header">
        <span onClick={() => setShowModal(true)}>
          <img src={logo} className="App-logo" alt="logo" />
        </span>
        <p>Click on the above image.</p>
      </header>
    </div>
  );
}

export default App;
