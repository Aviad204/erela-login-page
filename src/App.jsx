import React from 'react'

import './App.css';
import ForgotPasswordPage from './components/ForgotPasswordPage/ForgotPasswordPage';
import LoginPage from './components/LoginPage/LoginPage';
import SideNavBar from './components/SideNavBar/SideNavBar.tsx';

function App() {

  return (
    <div className="App h-100">
      <div className="d-flex flex-row h-100">
        <SideNavBar />
        <ForgotPasswordPage />
      </div>
    </div>
  );
}

export default App;
