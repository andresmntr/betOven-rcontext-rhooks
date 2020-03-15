import React from 'react';
import Login from './pages/LoginPage/Login'
// import Register from './pages/RegisterPage/Register'
import {Home} from './pages/HomePage/Home'


const App = currentUser => {
    // pages that advisable without login
    if (!currentUser) {
      return (
        <Login/>
        
        // register a user first
        // <Register/>
      );
    }
  
    // pages that required login
    return (

      <Home/>
    );
};

export default App;