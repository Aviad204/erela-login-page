import React, { FC } from 'react'

import './App.css';
import ForgotPassword from './views/ForgotPassword/ForgotPassword';

const App: FC = () => {

  return (
    <div className="App h-100">
      {/* <div className="d-flex flex-row h-100"> */}
      {/* <SideNavBar /> */}
      <ForgotPassword />
      {/* </div> */}
    </div>
  );
}

export default App;
