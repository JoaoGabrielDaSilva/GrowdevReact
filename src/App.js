import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Header from './Components/Header'
import Cadastro from './pages/Cadastro'


import GlobalStyles from './styles/GlobalStyles'

function App() {
  return (

    <Router>

        <Routes>
          <Route path="/" element={<Cadastro />} />
        </Routes>

      <GlobalStyles />
    </Router>
    
  );
}

export default App;
