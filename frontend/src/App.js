import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './screens/Home';
import Painel from './screens/Painel';
import Header from './components/Header';
import Servico from './screens/Servico';

function App() {
  return (
<>
<Header/>
<Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cadastrologin" element={<Painel />} />
        <Route path="/cadastrologin" element={<Painel />} />
        <Route path="/Servico" element={<Servico />} />
      </Routes>
    </Router></>
  );
}

export default App;


// site de referencia: https://novosmart.com.br/
