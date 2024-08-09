import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './screens/Home';
import Painel from './screens/Painel';
import Header from './components/Header';

function App() {
  return (
<>
<Header/>
<Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cadastrologin" element={<Painel />} />
      </Routes>
    </Router></>
  );
}

export default App;
