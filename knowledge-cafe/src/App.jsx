import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './component/navbar/Navbar'
import BlogData from './component/blogData/BlogData'


function App() {


  return (
    <div className="App">
      <Navbar></Navbar>
      <BlogData></BlogData>
    </div>
  )
}

export default App
