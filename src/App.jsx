import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Home from './pages/Home';
import Doctor from './pages/Doctor';
import Symptoms from './pages/Symptoms';
import Patients from './pages/Patients';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <BrowserRouter>
     <Navbar />
     <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/Doctor' element= {<Doctor/>}></Route>
      <Route path='/Symptoms' element= {<Symptoms />}></Route>
      <Route path='/Patients' element= {<Patients />}></Route>


     </Routes>
   

     </BrowserRouter>
     <Footer className=""/>
    </>
  )
}

export default App
