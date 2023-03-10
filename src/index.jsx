import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Survey from './pages/Survey'
import Results from './pages/Results'
import Freelances from './pages/Freelances'
import Header from './components/Header'
import Error from './components/Error'
import Footer from './components/Footer'
import GlobalStyle from './utils/style/GlobalStyle'
import ThemeProvider from './utils/context'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <GlobalStyle />
          <Header />
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/survey/:questionNumber" element={ <Survey />}/>
              <Route path="/results" element={ <Results />}/>
              <Route path="/freelances" element={ <Freelances />}/>
              <Route path="*" element={ <Error />}/>
            </Routes>
          <Footer />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
document.getElementById('root')
)
