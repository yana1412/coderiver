import React from 'react'

import Header from './components/header/Header'
import Main from './components/main/Main'
import SliderComponent from './components/slider/SliderComponent'

import './styles/reset.css'
import './styles/main.css'

function App() {
  return (
    <div className="App">
         <Header/>
         <Main/>
         <SliderComponent/>
    </div>
  );
}

export default App
