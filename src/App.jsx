// import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header/Header'
import Body from './Components/Body/Body'
import Areas from './Components/Areas/Areas'
import Happy from './Components/Happy/Happy'
import More from './Components/More/More'
import Let from './Components/Let/Let'
import Footer from './Components/Footer/Footer'
import './App.css'

function App() {


  return (
    <>
    <Router>
      <Header/>
      <Routes>
        <Route path='/' element={<><Body/><Areas/><Happy/><More/><Let/></>}/>
      </Routes>
      <Footer/>
    </Router>
    </>
  )
}

export default App
