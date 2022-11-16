import React, { FC } from 'react'
import {
  Route, BrowserRouter as Router,
  Routes
} from 'react-router-dom';

import './App.css';
import SideNavBar from './components/Sidebar/SideNavBarBACKUP';
import ForgotPassword from './views/ForgotPassword/ForgotPassword';
import Homepage from './views/Homepage/Homepage';

const App: FC = () => {

  return (
    <div className="App h-100">
      {/* <div className="d-flex flex-row h-100">
        <SideNavBar />
        <ForgotPassword />
      </div> */}
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
        </Routes>
      </Router>
      {/* <Homepage /> */}
    </div>
  );
}

export default App;
