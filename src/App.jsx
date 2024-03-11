import { useState } from 'react'
import Footer from './Components/Footer'
import UmBotao from './Components/pop-up/UmBotao'
import TituloLinha from './Components/TituloLinha'
import Plano from './Components/Plano'
import CategoriaPergunta from './Components/CategoriaPergunta'
import Pergunta from './Components/Pergunta'
import AvaliacaoPet from './Components/AvaliacaoPet'
import Lojas from './Components/Lojas'
import FotoPet from './Components/FotoPet'
import Filtro from './Components/Filtro'

function App() {

  return (
    <div className='flex justify-center items-center h-screen'>
      <Filtro/>
    </div>
  )
}

export default App;
