import { useState } from 'react'
import './App.css'
import Navbar from './components/navbar/Navbar'
import Sidebar from './components/sidebar/Sidebar'
import MainSection from './components/mainSection/MainSection'
import Fotter from './components/footer/Footer'
import navbar from './components/navbar/Navbar'

// Inside your main component render:
<Navbar />


function App() {


  return (
    <>
      <div className="mainContainer">
        <Navbar />
        <div className="mainSectionContentContainer">
          <Sidebar />
          <MainSection />
        </div>
        <Fotter/>
      </div>
    </>
  )
}

export default App
