import React from 'react';
import logo from './logo.svg';
import './App.css';
import styled, { ThemeProvider } from "styled-components";
import { BrowserRouter } from 'react-router-dom'; 
import { darkTheme } from "./utils/Themes";
import Navbar from './components/Navbar';

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
