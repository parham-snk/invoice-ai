import React from 'react';
import logo from './logo.svg';
import "./index.css";
import "./output.css";
import Router from './router/router';
import { ContextProvider } from './router/routes/home/AuthContext';

function App() {
  return (
    <ContextProvider>
      <Router />
    </ContextProvider>


  );
}

export default App;
