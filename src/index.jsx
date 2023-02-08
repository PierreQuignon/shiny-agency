import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Survey from './pages/Survey'
import Header from './compoments/Header'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
        <Routes>
            <Route exact path="/" element={<Home />}/>
            <Route path="/survey" element={<Survey />}/>
        </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)
