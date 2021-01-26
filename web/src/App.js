import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Header from './Components/Header'
import Cadastro from './pages/Cadastro'
import Login from './pages/Login'

import GlobalStyles from './styles/GlobalStyles'

function App() {
  return (

    <Router>

        <Routes>
          <Route path="/" element={<Cadastro />} />
          <Route path="/login" element={<Login />}/>
        </Routes>

      <GlobalStyles />
    </Router>
    
  );
}

export default App;
