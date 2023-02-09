import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Survey from './pages/Survey'
import Results from './pages/Results'
import Freelances from './pages/Freelances'
import Header from './compoments/Header'
import Error from './compoments/Error'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
        <Header />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/survey/:questionNumber" element={ <Survey />}/>
            <Route path="/results" element={ <Results />}/>
            <Route path="/freelances" element={ <Freelances />}/>
            <Route path="*" element={ <Error />}/>
          </Routes>
      </BrowserRouter>
  </React.StrictMode>,
document.getElementById('root')
)
