import React, { FunctionComponent } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PageHome from '../src/pages/home'
import PaginaProdutos from '../src/pages/PaginaProdutos'
import './App.css';
import PageHF from '../src/components/PageHF'


const App: FunctionComponent = () => {
  return (
    <BrowserRouter>

    <Routes>
      <Route path="/" element={<PageHome/>}/>
      <Route path="/" element={<PaginaProdutos/>}/>
     
    </Routes>

  </BrowserRouter>

    )
}

export default App
