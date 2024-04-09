//App contains conditional rendering of the Login Page and then HomeViewPage-the main display page
import { useState } from 'react';
import './index.css';

import LoginPage from './components/LoginPage/LoginPage';
import CircuitDetails from './components/Modals/CircuitDetails';
import DriverDetails from './components/Modals/DriverDetails';
import ConstructorDetails from './components/Modals/ConstructorDetails';
import Favorites from './components/Modals/Favorites';
import HomeViewPage from './components/HomeViews/HomeViewPage';

function App() {
  
  const [currentView, setCurrentView] = useState("login");
  
  const handleLoginClick = () => {
    setCurrentView("HomeViewPage");
  };

  return (
    <div className="App">
     {/*
      <button
        onClick={toggleModal}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-4"
      >
        Show details
  </button>*/}
       
      {/*isModalOpen && <Favorites update ={toggleModal}/>*/}
      {/*isModalOpen && <CircuitDetails circuit={circuit} update={toggleModal}/>*/}
      {/*isModalOpen && <DriverDetails driver={driver} update={toggleModal}/>*/}
      {/*isModalOpen && <ConstructorDetails constructor={constructor} update={toggleModal}/>*/}
      {currentView === "login" ? (<LoginPage onLoginClick={handleLoginClick}/>) : (
        <HomeViewPage />
      )}
    </div>
  );
}

export default App;
