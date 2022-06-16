import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './pages/App'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Aboutus from './pages/About';
import Careers from './pages/Careers';
ReactDOM.render(
  <React.StrictMode>
    <div className='w-full bg-black text-white text-opacity-80  min-h-screen '>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<App />} />
          <Route path='about' element={<Aboutus />} />
          <Route path='docs' element={<Aboutus />} />
          <Route path='careers' element={<Careers />} />
        </Routes>
      </BrowserRouter>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
)
