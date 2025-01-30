// import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header/Header'
import Body from './Components/Body/Body'
import Areas from './Components/Areas/Areas'
import Happy from './Components/Happy/Happy'
import More from './Components/More/More'
import Let from './Components/Let/Let'
import Footer from './Components/Footer/Footer'
import Practice from './Components/Practice/Practice'
import Services from './Components/Services/Services'
import Attorneys from './Components/Attorneys/Attorneys'
import About from './Components/About/About'
import Contact from './Components/Contact/Contact'
import Text from './Components/Text/Text'
import './App.css'

function App() {


  return (
    <>
    <Router>
      <Header/>
      <Routes>
        <Route path='/' element={<><Body/><Areas/><Happy/><More/><Let/></>}/>
        <Route path='/Practice' element={<><Practice/><Areas/><More/><Let/></>} />
        <Route path='/Services' element={<><Services/><Happy/><Let/></>}/>
        <Route path='/Attorneys' element={<><Attorneys/><Let/></>}/>
        <Route path='/About' element={<><About/><Let/></>}/>
        <Route path ='/Contact' element={<><Contact/><Text/></>}/>
      </Routes>
      <Footer/>
    </Router>
    </>
  )
}

export default App
