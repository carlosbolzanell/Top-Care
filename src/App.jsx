import { useState } from 'react'
import Footer from './Components/Footer'
import UmBotao from './Components/pop-up/UmBotao'
import TituloLinha from './Components/TituloLinha'
import Plano from './Components/Plano'
import Seletor from './Components/pop-up/Seletor'
import HistoricoConsulta from './Components/HistoricoConsulta/HistoricoConsulta'
import Endereco from './Components/Endereço/Endereco'
import CartõesSalvos from './Components/CartõesSalvos'
import Serviços from './Components/Serviços'
function App() {

  return (
    <div className='flex justify-center items-center h-screen'>
      <Serviços/>
    </div>
  )
}
export default App;
