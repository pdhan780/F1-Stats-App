import { useState } from 'react';
import './index.css';

import LoginPage from './components/LoginPage/LoginPage';
import CircuitDetails from './components/Modals/CircuitDetails';

function App() {
  const [circuit, setCircuit] = useState({
    name: 'Circuit of the Americas',
    location: 'Austin',
    country: 'USA'
  });

  // State to manage the visibility of the modal
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to toggle the modal
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className="App">
      {/* Button to open/close the modal */}
      <button
        onClick={toggleModal}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-4"
      >
        Show details
      </button>

      {isModalOpen && <CircuitDetails circuit={circuit} update={toggleModal}/>}
      {/* Uncomment the line below to use the LoginPage
      <LoginPage />*/}
    </div>
  );
}

export default App;
