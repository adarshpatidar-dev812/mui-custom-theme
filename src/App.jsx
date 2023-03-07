import React from 'react';
// Dependecy 
// Route 
import AppRoutes from './AppRoutes';
// Styles 
import './App.css';
import ThemeContextProvider from './theme';

function App() {
  return (
      <ThemeContextProvider>
        <AppRoutes />
      </ThemeContextProvider>
  );
}

export default App;
