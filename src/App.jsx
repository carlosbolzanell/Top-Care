import { useState } from 'react'
import Footer from './Components/Footer'
import UmBotao from './Components/pop-up/UmBotao'
import TituloLinha from './Components/TituloLinha'
import Plano from './Components/Plano'
import Select from './Components/Select/Select'

function App() {

  return (
    <div className='flex justify-center items-center h-screen'>
      <Select label={"Selecione o pet"}/>
    </div>
  )
}

export default App
