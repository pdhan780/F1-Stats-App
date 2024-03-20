import { useState } from 'react';
import './index.css';

import LoginPage from './components/LoginPage/LoginPage';
import CircuitDetails from './components/Modals/CircuitDetails';
import DriverDetails from './components/Modals/DriverDetails';
import ConstructorDetails from './components/Modals/ConstructorDetails';
import Favorites from './components/Modals/Favorites';

function App() {
  const [circuit, setCircuit] = useState({
    name: 'Circuit of the Americas',
    location: 'Austin',
    country: 'USA'
  });

  const [driver, setDriver] = useState({
    name: 'Lewis Hamilton',
    dob: 'January 7, 1985',
    age: 36
  });

  // State to manage the visibility of the modal
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to toggle the modal
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className="App">
     
      <button
        onClick={toggleModal}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-4"
      >
        Show details
      </button>
       
      <Favorites />
      {isModalOpen && <CircuitDetails circuit={circuit} update={toggleModal}/>}
      {/*isModalOpen && <DriverDetails driver={driver} update={toggleModal}/>*/}
      {/*isModalOpen && <ConstructorDetails constructor={constructor} update={toggleModal}/>*/}

      {/* Uncomment the line below to use the LoginPage */}
     { /*<LoginPage /> */}
    </div>
  );
}

export default App;
