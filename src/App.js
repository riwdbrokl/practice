import React from 'react';
import "./styles/styles.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import NavBar from "./components/NavBar/NavBar";
import Progress from './pages/Progress';

const App=()=> {
  return (
    <div className="App">
      <div className="container">
        <BrowserRouter>
          <NavBar />
          <Header />
          <Main />
          <Routes> 
            <Route path="/Progress" element={<Progress />} /> 
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </div>

  );
}

export default App;

