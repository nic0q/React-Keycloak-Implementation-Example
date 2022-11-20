import { Routes, Route } from "react-router-dom";
import { React } from 'react';
import './App.css';
// import Index from './components/Index';
import Hola from './components/Hola';
import { ReactKeycloakProvider } from '@react-keycloak/web'

import keycloak from './keycloak'

function App() {
  return (
    <ReactKeycloakProvider authClient={keycloak}>
      <Routes>
        {/* <Route path='/' element={<Index/>} exact/> */}
        <Route path='/hola' element={<Hola/>} exact/>
      </Routes>
  </ReactKeycloakProvider>
  );
}

export default App;


